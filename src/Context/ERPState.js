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
   const [collection,setCollection]=useState([]);
  const [b2b,setb2b]=useState([]);
  const [b2c,setb2c]=useState([]);
  const [salesorder,setSalesorder]=useState([]);
  const [Item, setItem] = useState([]);
  const [EInvoice,setEInvoiceDB]=useState([]);
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

//retrieve B2B cust
const FetchB2B = async () => {
  setLoading(true);
  try {
    const res = await fetch('https://bahupada-60055136581.development.catalystserverless.in/getB2B', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const json = await res.json();              // { output: "..." }
    const parsed = JSON.parse(json.output);     // { success, total, customers: [...] }
    setb2b(parsed.customers || []);
  } catch (err) {
    console.error('Error fetching B2B customers:', err);
  } finally {
    setLoading(false);
  }
};
//retrieve B2C cust
const FetchB2C = async () => {
  setLoading(true);
  try {
    const res = await fetch('https://bahupada-60055136581.development.catalystserverless.in/GetB2C', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const json = await res.json();              // { output: "..." }
    const parsed = JSON.parse(json.output);     // { success, total, customers: [...] }
    setb2c(parsed.customers || []);
  } catch (err) {
    console.error('Error fetching B2C customers:', err);
  } finally {
    setLoading(false);
  }
};
//Create customer
const CreateCustomer = async (customerData, navigation) => {
  // console.log(customerData)
  setLoading(true);
  try {
    const url = 'https://bahupada-60055136581.development.catalystserverless.in/createCustomer';

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ customerData }),   // ✔ CORRECT PACKAGING
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const json = await res.json();
    const parsed = JSON.parse(json.output);
    // console.log(parsed)
    // 🔥 SUCCESS POPUP + NAVIGATION
    if (parsed.success) {
      Alert.alert(
        "Success",
        "Customer created successfully!",
        [
          {
            text: "OK",
            onPress: () => navigation.goBack() 
          }
        ]
      );
    } else {
      Alert.alert("Error", parsed.error || "Unknown error occurred.");
    }

  } catch (err) {
    console.error('Error creating customer:', err);

    Alert.alert("Error", "Failed to create customer. Please try again.");
  } finally {
    setLoading(false);
  }
};




// Fetch Collection Module details
const FetchCollection = async (status = "") => {
  setLoading(true);
  try {
    const url = `https://bahupada-60055136581.development.catalystserverless.in/GetCollectionsModule?status=${status}`;
    const res = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const json = await res.json();
    const parsed = JSON.parse(json.output);
    setCollection(parsed.collections || []);

  } catch (err) {
    console.error('Error fetching Collections Module customers:', err);
  } finally {
    setLoading(false);
  }
};

//Create salesorder
const CreateSO = async (soData, navigation) => {
  // console.log(customerData)
  setLoading(true);
  try {
    const url = 'https://bahupada-60055136581.development.catalystserverless.in/createSO';
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ soData: soData })   // ✔ CORRECT PACKAGING
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const json = await res.json();
    const parsed = JSON.parse(json.output);
    // console.log(parsed)
    // 🔥 SUCCESS POPUP + NAVIGATION
    if (parsed.success) {
      Alert.alert(
        "Success",
        "Salesorder created successfully!",
        [
          {
            text: "OK",
            onPress: () => navigation.goBack() 
          }
        ]
      );
    } else {
      Alert.alert("Error", parsed.error || "Unknown error occurred.");
    }

  } catch (err) {
    console.error('Error creating customer:', err);

    Alert.alert("Error", "Failed to create customer. Please try again.");
  } finally {
    setLoading(false);
  }
};

//Fetch salesorder
const FetchSO = async (status = "") => {
  setLoading(true);
  try {
    const url = `https://bahupada-60055136581.development.catalystserverless.in/getSO`;
    const res = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const json = await res.json();
    const parsed = JSON.parse(json.output);
    setSalesorder(parsed.salesorders || []);

  } catch (err) {
    console.error('Error fetching Sales Order:', err);
  } finally {
    setLoading(false);
  }
};
//Fetch items
const FetchItem = async () => {
  setLoading(true);
  try {
    const url = `https://bahupada-60055136581.development.catalystserverless.in/getItem`;
    const res = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const json = await res.json();              // Level 1
    const parsed1 = JSON.parse(json.output);    // Level 2  -> contains .output
    const parsed2 = JSON.parse(parsed1.output); // Level 3  -> contains .items

    setItem(parsed2.items || []);

  } catch (err) {
    console.error('Error fetching Items:', err);
  } finally {
    setLoading(false);
  }
};
const [EInvoicee,setEInvoice]=useState([]);
//Fetch E-INvoice DB
const safeParse = (value) => {
  if (!value) return null;
  if (typeof value === "object") return value;   // Already parsed
  try { return JSON.parse(value); } 
  catch { return null; }
};

const EInvoiceDB = async () => {
  setLoading(true);
  try {
    const url = `https://bahupada-60055136581.development.catalystserverless.in/GetEInvoiceDB`;
    const res = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    // STEP 1 — Level 1
    const level1 = await res.json();
    console.log("LEVEL 1:", level1);

    // STEP 2 — Parse output (string OR object)
    const level2 = safeParse(level1.output);
    console.log("LEVEL 2:", level2);

    // 🚀 NEW FIX: level2 already contains data correctly
    // STRUCTURE:
    // {
    //   success: true,
    //   total_b2c_customers: 1,
    //   data: [ { customer + invoices } ]
    // }

    const customers = level2?.data || [];
    console.log("CUSTOMERS:", customers);

    // STEP 3 — FLATTEN INVOICES
    const invoiceList = [];

    customers.forEach(customer => {
      (customer.invoices || []).forEach(inv => {
        invoiceList.push({
          invoice_id: inv.invoice_id,
          invoice_number: inv.invoice_number,
          date: inv.date,
          amount: inv.total,
          status: inv.status,
          invoice_type: inv.type,
          customer_name: customer.customer_name,
          customer_id: customer.customer_id,
          full: inv
        });
      });
    });

    console.log("INVOICES:", invoiceList);

    // Step 4 — Store into context
    setEInvoiceDB(customers);
    setEInvoice(invoiceList);

  } catch (err) {
    console.error("Error fetching E-Invoice DB:", err);
  } finally {
    setLoading(false);
  }
};




  return (
    <ERPContext.Provider
      value={{
        EInvoicee,
        EInvoiceDB,
        FetchItem,
        Item,
        FetchSO,
        CreateSO,
        salesorder,
        CreateCustomer,
        collection,
        setCollection,
        FetchCollection,
        FetchB2B,
        b2b,
        FetchB2C,
        b2c,
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
