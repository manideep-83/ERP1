const BASE_URL = 'http://10.0.2.2:5000/company'; // your backend

export const getProduct= async()=>{
 try {
    const res = await fetch(`${BASE_URL}/product/Retrieve`);
    return await res.json();
  } catch (err) {
    console.error('Error fetching suppliers:', err);
    throw err;
  }
};
export const getSuppliers = async () => {
  try {
    const res = await fetch(`${BASE_URL}/RetrieveVendors`);
    return await res.json();
  } catch (err) {
    console.error('Error fetching suppliers:', err);
    throw err;
  }
};
//Purchase order retrive
export const getPO = async()=>{
try {
    const res = await fetch(`${BASE_URL}/purchaseorder/Retrieve`);
    return await res.json();
  } catch (err) {
    console.error('Error fetching suppliers:', err);
    throw err;
  }
};
// Purchase return retrieve
export const getPR = async()=>{
try {
    const res = await fetch(`${BASE_URL}/vendorcredit/Retrieve`);
    return await res.json();
  } catch (err) {
    console.error('Error fetching suppliers:', err);
    throw err;
  }
};
//Retrieve GRN
export const getGRN = async()=>{
try {
    const res = await fetch(`${BASE_URL}/GRN/Retrieve`);
    return await res.json();
  } catch (err) {
    console.error('Error fetching suppliers:', err);
    throw err;
  }
};

export const createPurchaseOrder = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}/purchaseorder/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (err) {
    console.error('Error creating PO:', err);
    throw err;
  }
};

export const createPurchaseReturn = async (data) => {
  const res = await fetch(`${BASE_URL}/purchasereturn/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const json = await res.json();

  if (!res.ok) {
    // if backend returned 500 or 400
    throw new Error(json.error || 'Purchase Return creation failed');
  }

  return json;
};
