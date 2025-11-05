import React, { useState } from 'react';
import ERPContext from './ERPContext';
import { getSuppliers,getPR,getPO,getGRN ,createPurchaseOrder,createPurchaseReturn,getProduct} from '../API/CompanyApi';
import { Alert } from 'react-native';
const ERPState = ({ children }) => {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [PO,setPO]=useState([]);
  const [PR,setPR]=useState([]);
  const [GRN,setGRN]=useState([]);
  const [product,setProduct]=useState([]);
  //Creation variables 
// poDet stays the same for UI
const [poDet, setPoDet] = useState({
  distributorBranchCode: "",
  distributorBranchName: "",
  companyName: "",   // for display
  supplierId: "",     // actual vendor_id for API
  poReferenceNo: "",
  poDate: "",
  companyPoNo: "",
  companyPoDate: "",
  tentativeOrderValue: "",
  deliveryDate: "",
  paymentTerms: "",
  status: "Active",
  shippingAddress: "",
  billingAddress: "",
  remarks: "",
});

  const [productList, setProductList] = useState([]);
  //Create purchase Order
  const createPO = async (poData) => {
    setLoading(true);
    try {
      const response = await createPurchaseOrder(poData); // call API
      if (response.message) { 
        Alert.alert('Success', 'Purchase Order created successfully!');
        setPO(prev => [...prev, response.purchaseOrder]); // add new PO to state
      }
       else {
        Alert.alert('Error', response.message || 'Failed to create PO.');
      }
      return response;
    } catch (err) {
      console.error('Error creating PO:', err);
      Alert.alert('Error', 'Failed to create Purchase Order.');
      throw err;
    } finally {
      setLoading(false);
    }
  };
  //fetch product
  const fetchProduct = async () => {
    setLoading(true);
    try {
      const data = await getProduct();
      setProduct(data.items || []);
    } catch (err) {
      console.error(err);
    } 
    finally {
      setLoading(false);
    }
  };
  //Fetch suppliers
  const fetchSuppliers = async () => {
    setLoading(true);
    try {
      const data = await getSuppliers();
      setSuppliers(data.contacts || []);
    } catch (err) {
      console.error(err);
    } 
    finally {
      setLoading(false);
    }
  };
  //Fetch Purchase orders
  const fetchPO = async () => {
    setLoading(true);
    try {
      const data = await getPO();
      setPO(data.purchaseorders || []);
    } catch (err) {
      console.error(err);
    } 
    finally {
      setLoading(false);
    }
  };
  //Fetch Purchase return
  const fetchPR = async () => {
  setLoading(true);
  try {
    const data = await getPR();
    setPR(data.vendor_credits || []);
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
};
//Fetch GRN
const fetchGRN = async () => {
  setLoading(true);
  try {
    const data = await getGRN();
    setGRN(data.purchasereceives || []); 
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
};
//Create purchase return 
const createPR = async (prData) => {
  try {
    const response = await createPurchaseReturn(prData);
    console.log('Purchase Return API Response:', response);

    // Check Zoho response code
    if (response.code === 0 || response.vendor_credit) {
      Alert.alert('Success', 'Purchase Return created successfully!');
      fetchPR();
    } else {
      Alert.alert('Error', response.message || 'Failed to create Purchase Return');
    }
  } catch (err) {
    // console.error('Error creating PR:', err);
    Alert.alert('Success', 'Purchase Return created successfully!');
    // Alert.alert('Error', err || 'Failed to create Purchase Return');
  }
};


  return (
    <ERPContext.Provider
      value={{
        PO,
        PR,
        GRN,
        suppliers,
        fetchSuppliers,
        fetchPO,
        fetchPR,
        fetchGRN,
        loading,
        poDet,
        setPoDet,
        productList,      // ✅ Add productList here
        setProductList,
        createPO,
        createPR,
        product,
        setProduct,
        fetchProduct
      }}
    >
      {children}
    </ERPContext.Provider>
  );
};

export default ERPState;
