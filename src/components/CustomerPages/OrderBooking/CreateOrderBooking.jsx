import React, { useState, useEffect, useContext } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import ERPContext from '../../../Context/ERPContext';

const CreateOrderBooking = () => {

    // CONTEXT
    const {
        FetchB2B,
        b2b,
        Item,
        FetchItem,
        CreateSO
    } = useContext(ERPContext);

    // STATES
    const [distributorBranchCode] = useState('16622-16622-SRI VENKATE');
    const [orderNo, setOrderNo] = useState('');
    const [status] = useState('New');

    const [salesman, setSalesman] = useState('Select Salesman');
    const [route, setRoute] = useState('Select Route');

    // CUSTOMER STATES
    const [customerInput, setCustomerInput] = useState('');
    const [normalizedCustomers, setNormalizedCustomers] = useState([]);
    const [filteredCustomers, setFilteredCustomers] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [showCustomerDropdown, setShowCustomerDropdown] = useState(false);

    // ITEM STATES
    const [itemSearch, setItemSearch] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const [showItemDropdown, setShowItemDropdown] = useState(false);

    // CART
    const [cart, setCart] = useState([]);

    const salesmanOptions = ["Select Salesman", "SM01 - JOHN", "SM02 - RAVI"];
    const routeOptions = ["Select Route", "RT-A", "RT-B", "RT-C"];

    // FETCH DATA
    useEffect(() => {
        FetchB2B();
        FetchItem();
    }, []);

    // NORMALIZE CUSTOMERS
    useEffect(() => {
        if (b2b.length > 0) {
            const normalized = b2b.map(c => ({
                customer_id: c.contact_id,
                customer_name: c.contact_name,
                company_name: c.company_name,
                email: c.email,
                phone: c.phone,
                billing_address: c.billing_address,
                shipping_address: c.shipping_address,
                custom_fields: c.custom_fields,
                ...c
            }));

            setNormalizedCustomers(normalized);
            setFilteredCustomers(normalized);
        }
    }, [b2b]);

    // CUSTOMER SEARCH
    useEffect(() => {
        if (customerInput.trim() === "") {
            setFilteredCustomers(normalizedCustomers);
            return;
        }

        const searched = normalizedCustomers.filter(c =>
            c.customer_name.toLowerCase().includes(customerInput.toLowerCase())
        );

        setFilteredCustomers(searched);
    }, [customerInput, normalizedCustomers]);

    // ITEM SEARCH
    useEffect(() => {
        if (itemSearch.trim() === "") {
            setFilteredItems(Item);
            return;
        }

        const searched = Item.filter(i =>
            (i.name || "").toLowerCase().includes(itemSearch.toLowerCase())
        );

        setFilteredItems(searched);
    }, [itemSearch, Item]);

    // ADD ITEM WITH C-RATE PRICE
    const addItem = (item) => {
        setCart(prev => {
            const exists = prev.find(i => i.item_id === item.item_id);
            if (exists) return prev;

            return [
                ...prev,
                {
                    ...item,
                    quantity: 1,
                    applied_rate: item.cf_c_rate_price_unformatted || 0
                }
            ];
        });
    };

    // UPDATE QTY
    const updateQty = (index, qty) => {
        const updated = [...cart];
        updated[index].quantity = Math.max(1, qty);
        setCart(updated);
    };

    // REMOVE ITEM
    const removeItem = (index) => {
        const updated = cart.filter((_, i) => i !== index);
        setCart(updated);
    };

    // SAVE SALES ORDER
    const handleSave = async () => {
        if (!selectedCustomer) return alert("Select a customer");
        if (cart.length === 0) return alert("Add at least one item");

        const payload = {
            customer_id: selectedCustomer.customer_id,
            customer_name: selectedCustomer.customer_name,

            date: new Date().toISOString().split("T")[0],
            reference_number: orderNo || `SO-${Date.now()}`,

            salesman: salesman !== "Select Salesman" ? salesman : "",
            route: route !== "Select Route" ? route : "",

            line_items: cart.map(item => ({
                item_id: item.item_id,
                quantity: item.quantity,
                rate: item.applied_rate,
                total: item.quantity * item.applied_rate,
            })),

            

           
        };

        console.log("FINAL SO PAYLOAD:", JSON.stringify(payload, null, 2));

        await CreateSO(JSON.stringify(payload));
    };

    // PICKER
    const renderPicker = (value, setValue, options) => (
        <Picker selectedValue={value} onValueChange={setValue} style={styles.picker}>
            {options.map((op, i) => <Picker.Item key={i} label={op} value={op} />)}
        </Picker>
    );

    // UI
    return (
        <ScrollView style={styles.container}>

            <Text style={styles.headerText}>Create New Order</Text>

            {/* FORM CARD */}
            <View style={styles.formContainer}>

                {/* ROW 1 */}
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.mr]}>
                        <Text style={styles.label}>Distributor Branch Code</Text>
                        <Text style={styles.displayValue}>{distributorBranchCode}</Text>
                    </View>

                    <View style={[styles.inputGroup, styles.mr]}>
                        <Text style={styles.label}>Order No</Text>
                        <TextInput style={styles.input} value={orderNo} onChangeText={setOrderNo} />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Status</Text>
                        <Text style={styles.displayValue}>{status}</Text>
                    </View>
                </View>

                {/* ROW 2 */}
                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.mr]}>
                        <Text style={styles.label}>Salesman</Text>
                        {renderPicker(salesman, setSalesman, salesmanOptions)}
                    </View>

                    <View style={[styles.inputGroup, styles.mr]}>
                        <Text style={styles.label}>Route</Text>
                        {renderPicker(route, setRoute, routeOptions)}
                    </View>
                </View>

                {/* CUSTOMER DROPDOWN */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Customer (B2B)</Text>

                    <TouchableOpacity
                        style={styles.selectorBox}
                        onPress={() => {
                            setShowCustomerDropdown(!showCustomerDropdown);
                            setShowItemDropdown(false);
                            setCustomerInput("");
                            setFilteredCustomers(normalizedCustomers);
                        }}
                    >
                        <Text style={styles.selectorText}>
                            {selectedCustomer ? selectedCustomer.customer_name : "Select Customer"}
                        </Text>
                    </TouchableOpacity>

                    {showCustomerDropdown && (
                        <View style={styles.dropdownPanel}>
                            <TextInput
                                placeholder="Search Customer"
                                style={styles.dropdownSearch}
                                value={customerInput}
                                onChangeText={setCustomerInput}
                            />

                            <ScrollView style={{ maxHeight: 230 }}>
                                {filteredCustomers.map(cust => (
                                    <TouchableOpacity
                                        key={cust.customer_id}
                                        style={styles.dropdownItemRow}
                                        onPress={() => {
                                            setSelectedCustomer(cust);
                                            setShowCustomerDropdown(false);
                                        }}
                                    >
                                        <Text style={styles.dropdownItemTitle}>{cust.customer_name}</Text>
                                        <Text style={styles.dropdownItemSub}>{cust.customer_id}</Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>
                    )}
                </View>
            </View>

            {/* CUSTOMER CARD */}
            {selectedCustomer && (
                <View style={styles.customerCard}>
                    <Text style={styles.customerTitle}>Customer Details</Text>

                    <View style={styles.customerRow}>
                        <Text style={styles.customerLabel}>Name:</Text>
                        <Text style={styles.customerValue}>{selectedCustomer.customer_name}</Text>
                    </View>

                    <View style={styles.customerRow}>
                        <Text style={styles.customerLabel}>Code:</Text>
                        <Text style={styles.customerValue}>{selectedCustomer.customer_id}</Text>
                    </View>

                    <View style={styles.customerRow}>
                        <Text style={styles.customerLabel}>Company:</Text>
                        <Text style={styles.customerValue}>{selectedCustomer.company_name}</Text>
                    </View>
                </View>
            )}

            {/* ITEM DROPDOWN */}
            <View style={styles.formContainer}>
                <Text style={styles.label}>Items</Text>

                <TouchableOpacity
                    style={styles.selectorBox}
                    onPress={() => {
                        setShowItemDropdown(!showItemDropdown);
                        setShowCustomerDropdown(false);
                        setItemSearch("");
                        setFilteredItems(Item);
                    }}
                >
                    <Text style={styles.selectorText}>Select Items</Text>
                </TouchableOpacity>

                {showItemDropdown && (
                    <View style={styles.dropdownPanel}>
                        <TextInput
                            placeholder="Search Items"
                            style={styles.dropdownSearch}
                            value={itemSearch}
                            onChangeText={setItemSearch}
                        />

                        <ScrollView style={{ maxHeight: 260 }}>
                            {filteredItems.map(item => (
                                <TouchableOpacity
                                    key={item.item_id}
                                    style={styles.dropdownItemRow}
                                    onPress={() => addItem(item)}
                                >
                                    <Text style={styles.dropdownItemTitle}>{item.name}</Text>
                                    <Text style={styles.dropdownItemSub}>
                                        ₹{item.cf_c_rate_price_unformatted || 0}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                )}
            </View>

            {/* CART */}
            <View style={styles.cartContainer}>
                <Text style={styles.cartTitle}>Order Items</Text>

                {cart.length === 0 && (
                    <Text style={{ textAlign: 'center', color: '#aaa' }}>No items added</Text>
                )}

                {cart.map((item, index) => (
                    <View
                        key={item.item_id}
                        style={styles.cartRow}
                    >
                        <Text style={styles.cartItem}>{item.name}</Text>

                        <View style={styles.qtyRow}>
                            <TouchableOpacity onPress={() => updateQty(index, item.quantity - 1)}>
                                <Text style={styles.qtyBtn}>-</Text>
                            </TouchableOpacity>

                            <Text style={styles.qty}>{item.quantity}</Text>

                            <TouchableOpacity onPress={() => updateQty(index, item.quantity + 1)}>
                                <Text style={styles.qtyBtn}>+</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.cartPrice}>₹{item.applied_rate}</Text>

                        <TouchableOpacity onPress={() => removeItem(index)} style={styles.deleteBtn}>
                            <Text style={styles.deleteText}>🗑</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>

            {/* BUTTONS */}
            <View style={styles.buttonRow}>
                <TouchableOpacity style={[styles.btn, styles.save]} onPress={handleSave}>
                    <Text style={styles.btnText}>Save</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.btn, styles.discard]}>
                    <Text style={styles.btnText}>Discard</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
};

// STYLES
const styles = StyleSheet.create({
    container: { padding: 10, backgroundColor: '#f5f5f5' },

    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#1f3a8a',
        marginBottom: 20,
        alignSelf: 'center'
    },

    formContainer: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        elevation: 2,
    },

    row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
    inputGroup: { flex: 1 },
    mr: { marginRight: 10 },

    label: { fontSize: 13, color: '#555', marginBottom: 6 },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 6,
        fontSize: 16
    },

    displayValue: {
        fontSize: 16,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 6,
    },

    picker: { height: 45, width: '100%' },

    selectorBox: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 12,
        backgroundColor: '#fafafa',
    },
    selectorText: { fontSize: 16, color: '#333' },

    dropdownPanel: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        padding: 12,
        marginTop: 8,
        elevation: 3,
    },

    dropdownSearch: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        marginBottom: 12,
        fontSize: 16
    },

    dropdownItemRow: {
        paddingVertical: 10,
        paddingHorizontal: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#eee"
    },
    dropdownItemTitle: { fontSize: 16, fontWeight: "600", color: "#333" },
    dropdownItemSub: { fontSize: 12, color: "#888" },

    customerCard: {
        backgroundColor: "#fff",
        padding: 18,
        borderRadius: 12,
        marginBottom: 15,
        elevation: 3,
    },
    customerTitle: { fontSize: 18, fontWeight: '700', marginBottom: 12, color: "#1f3a8a" },
    customerRow: { flexDirection: 'row', marginBottom: 8 },
    customerLabel: { width: '40%', fontSize: 14, fontWeight: '600', color: "#555" },
    customerValue: { width: '60%', fontSize: 15, fontWeight: 'bold', color: "#222" },

    cartContainer: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 12,
        marginBottom: 20,
        elevation: 3,
    },
    cartTitle: { fontSize: 20, fontWeight: '700', marginBottom: 15, color: "#1f3a8a" },

    cartRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#eee"
    },

    cartItem: { width: '40%', fontSize: 15, fontWeight: '500' },

    qtyRow: { flexDirection: 'row', alignItems: 'center' },
    qtyBtn: { fontSize: 22, paddingHorizontal: 12, color: "#1f3a8a" },
    qty: { fontSize: 18, paddingHorizontal: 10 },

    cartPrice: { width: '18%', textAlign: 'right', fontSize: 16, fontWeight: '700' },

    deleteBtn: { paddingHorizontal: 6 },
    deleteText: { fontSize: 22, color: 'red' },

    buttonRow: { flexDirection: 'row', justifyContent: 'center', marginVertical: 20 },
    btn: { paddingVertical: 14, paddingHorizontal: 25, borderRadius: 10, marginHorizontal: 10 },
    save: { backgroundColor: '#1f3a8a' },
    discard: { backgroundColor: '#dc2626' },
    btnText: { color: '#fff', fontWeight: '700', fontSize: 16 },
});

export default CreateOrderBooking;
