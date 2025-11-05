import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPassword from '../components/ForgotPassword'
import LoginScreen from '../components/Login'
import Home from '../components/Home';
import AppHeader from '../components/AppHeader';
import Company from '../components/Company'
import Distribution from '../components/Distribution';
import Inventory from '../components/Inventory';
import Scheme from '../components/Scheme'
import Finance from '../components/Finance';
import ConfigurationScreen from '../components/Configuration';
import ReportScreen from '../components/Report'
import Utilities from '../components/Utilities'
import Product from '../components/Product'
import EInvoiceReport from '../components/DistributionPages/EInvoiceReport';
import DistributionBranch from '../components/DistributionPages/DistributionBranch'
import Vehicle from '../components/DistributionPages/Vehicle'
import VehicleAllocation from '../components/DistributionPages/VehicleAllocation'
import DeliveryBoy from '../components/DistributionPages/DeliveryBoy'
import DeliveryBoyRoute from '../components/DistributionPages/DeliveryBoyRoute'
import CustomerShippingAddress from '../components/DistributionPages/CustomerShippingAddress'
import RouteCoveragePlan from '../components/DistributionPages/RouteCoveragePlan'
import Salesman from '../components/DistributionPages/Salesman'
import SalesmanRouteMapping from '../components/DistributionPages/SalesmanRouteMapping'
import Merchandiser from '../components/DistributionPages/Merchandiser'
import MerchandiserRoute from '../components/DistributionPages/MerchandiserRoute'
import StockiestTMR from '../components/DistributionPages/StockiestTMR'
import Routt from '../components/DistributionPages/routt';
import EInvoiceOverview from '../components/DistributionPages/EInvoiceOverview';
import DistributionBOverview from '../components/DistributionPages/DistributionBOverview'
import VehicleOverview from '../components/DistributionPages/VehicleOverview'
import VehicleAOverview from '../components/DistributionPages/VehicleAOverview'
import DelivoryBoyOverview from '../components/DistributionPages/DeliveryBoyOverview'
import DeliveryBoyRouteOverview from '../components/DistributionPages/DeliveryBoyRouteOverview'
import CustomerShippingAdressOverview from '../components/DistributionPages/CustomerShippingAdressOverview'
import RouttOverview from '../components/DistributionPages/RouttOverview'
import RouteCoverageOverview from '../components/DistributionPages/RouteCoverageOverview'
import SalesmanOverview from '../components/DistributionPages/SalesmanOverview'
import SalesmanRMOverview from '../components/DistributionPages/SalesmanRMOverview'
import StockiestOverview from '../components/DistributionPages/StockiestOverview'
import MerchandiserOverview from '../components/DistributionPages/MerchandiserOverview'
import MerchandiserRouteOverview from '../components/DistributionPages/MerchandiserRouteOverview'
import GST from '../components/ProductPage/GST';
import ProductAndPricing from '../components/ProductPage/ProductAndPricing'
import UOM from '../components/ProductPage/UOM'
import PriceDiscount from '../components/ProductPage/PriceDiscount';
import GTax from '../components/ProductPage/GTax'
import GSTOverview from '../components/ProductPage/GSTOverview'
import GtaxOverview from '../components/ProductPage/GtaxOverview'
import PAPOverview from '../components/ProductPage/PAPOverview'
import UserProfile from '../components/ConfigurationPages/UserProfile'
import UserGroup from '../components/ConfigurationPages/UserGroup'
import JC from '../components/ConfigurationPages/JC'
import HolidayCalander from '../components/ConfigurationPages/HolidayCalander'
import BillPrintConfig from '../components/ConfigurationPages/BillPrintConfig';
import Pda from '../components/ConfigurationPages/Pda';
import DistribuorConfig from '../components/ConfigurationPages/DistributorConfig'
import DayEnd from '../components/ConfigurationPages/DayEnd';
import ETL from '../components/ConfigurationPages/ETL'
import Einvoice from '../components/ConfigurationPages/Einvoice'
import UserProfileOverview from '../components/ConfigurationPages/UserProfileOverview'
import UserGroupOverview from '../components/ConfigurationPages/UserGroupOverview'
import JCOverview from '../components/ConfigurationPages/JCOverview'
import HolidayCalanderOverview from '../components/ConfigurationPages/HolidayCalanderOverview'
import PurchaseReport from '../components/ReportsPages/PurchaseReport'
import SalesReport from '../components/ReportsPages/SalesReport'
import LiveReport from '../components/ReportsPages/LiveReport'
import SchemeClaim from '../components/ReportsPages/SchemeClaims'
import CollectionReport from '../components/ReportsPages/CollectionReport'
import StockReport from '../components/ReportsPages/StockReport'
import BillPrint from '../components/ReportsPages/BillPrint'
import InformativeReport from '../components/ReportsPages/InformativeReport'
import FinanceReport from '../components/ReportsPages/FinanceReport'
import ClaimsReport from '../components/ReportsPages/ClaimsReport'
import GSTReport from '../components/ReportsPages/GSTReport'
import GSTRReport from '../components/ReportsPages/GSTRReport'
import GeneralReport from '../components/ReportsPages/GeneralReport'
import MasterReport from '../components/ReportsPages/MasterReport'
import SchemeClaims from '../components/ReportsPages/SchemeClaims';
import CreateStockiest from '../components/DistributionPages/CreateStockiest'
import CreateMerchandiser from '../components/DistributionPages/CreateMerchandiser'
import CreateMerchRoute from '../components/DistributionPages/CreateMerchRoute'
import CreateSalesRouteMap from '../components/DistributionPages/CreateSalesRouteMap'
import CreateRCS from '../components/DistributionPages/CreateRCS'
import CreateR from '../components/DistributionPages/CreateR'
import CreateSA from'../components/DistributionPages/CreateSA'
import CreateDB from '../components/DistributionPages/CreateDB'
import CreateDelivery from '../components/DistributionPages/CreateDelivery'
import CreateVA from '../components/DistributionPages/CreateVA'
import CreateVehicle from '../components/DistributionPages/CreateVehicle'
import CreateEI from '../components/DistributionPages/CreateEI'
import CreateNew from '../components/ConfigurationPages/CreateNew'
import CreateScreenName from '../components/ConfigurationPages/CreateScreenName'
import CreateHoliday from '../components/ConfigurationPages/CreateHoliday';
import CreateHolidayOverview from '../components/ConfigurationPages/CreateHolidayOverview'
// import SchemePagesRoute from './SchemePagesRoute';
import ClaimType from '../components/SchemePages/ClaimType/ClaimType';
import ClaimOverview from '../components/SchemePages/ClaimType/ClaimOverview';
import GSTClaim from '../components/SchemePages/GSTClaim/GSTClaim';
import GSTClaimOverview from '../components/SchemePages/GSTClaim/GSTClaimOverview';
import CreateNewGSTClaim from '../components/SchemePages/GSTClaim/CreateNewGSTClaim';
import InvoiceToClaim from '../components/SchemePages/InvoiceToClaim/InvoicetoClaim';
import LeakageClaim from '../components/SchemePages/LeakageClaim/LeakageDamageReturnClaim';
import LeakageDamageReturnClaimOverview from '../components/SchemePages/LeakageClaim/LeakageDamageReturnClaimOverview';
import CreateLeakageDamageReturnClaim from '../components/SchemePages/LeakageClaim/CreateLeakageDamageReturnClaim';
import ManualClaim from '../components/SchemePages/ManualClaim/ManualClaim';
import ManualClaimOverview from '../components/SchemePages/ManualClaim/ManualClaimOverview';
import CreateNewManualClaim from '../components/SchemePages/ManualClaim/CreateManualClaim';
import OtherClaim from '../components/SchemePages/OtherClaim/OtherClaim';
import OtherServiceClaims from '../components/SchemePages/OtherClaim/OtherServiceClaims';
import OtherServiceClaimsOverview from '../components/SchemePages/OtherClaim/OtherServiceClaimsOverview';
import Program from '../components/SchemePages/Program/ProgramServiceClaim';
import ProgramServiceClaimOverview from '../components/SchemePages/Program/ProgramServiceClaimOverview';
import ProgramMaterial from '../components/SchemePages/Program/ProgramMaterial';
import ProgramMaterialOverview from '../components/SchemePages/Program/ProgramMaterialOverview';

import SchemeScreen from '../components/SchemePages/Scheme/SchemeScreen';
import SchemeOverview from '../components/SchemePages/Scheme/SchemeOverview';
import SecondarySchemeClaim from '../components/SchemePages/Scheme/SecondarySchemeClaim';
import SKU from '../components/SchemePages/SKU/CreateSKU';
import CreateSKUOverview from '../components/SchemePages/SKU/CreateSKUOverview';
import TBTLClaim from '../components/SchemePages/TBTLClaim/TBTLClaim';
import TBTLClaimOverview from '../components/SchemePages/TBTLClaim/TBTLClaimOverview';
import ToClaim from '../components/SchemePages/ToClaim/ToClaim';
import ToClaimOverview from '../components/SchemePages/ToClaim/ToClaimOverview';
import CreateNewClaimType from '../components/SchemePages/ClaimType/CreateNewClaimType';
import OtherClaimOverview from '../components/SchemePages/OtherClaim/OtherClaimOverview';
import InvoicetoClaimOverview from '../components/SchemePages/InvoiceToClaim/InvoicetoClaimOverview';

import FinanceScreen from '../components/FinancePages/FinanceScreen' ;

import Customer from '../components/Customer';

import GoodsReceiptsNote from '../components/CompanyPages/GoodsReceiptsNote/GoodsReceiptsNote';
import GoodsReceiptsNoteOverview from '../components/CompanyPages/GoodsReceiptsNote/GoodsReceiptsNoteOverview';
import CreateNewGRN from '../components/CompanyPages/GoodsReceiptsNote/CreateNewGRN';
import CreditDebitNote from '../components/CompanyPages/CompanyCreditDebitNote/CompanyCreditDebitNoteScreen';
import CompanyCreditDebitNoteScreenOverview from '../components/CompanyPages/CompanyCreditDebitNote/CompanyCreditDebitNoteScreenOverview';
import CreateCompanyCreditDebitNoteScreen from '../components/CompanyPages/CompanyCreditDebitNote/CreateCompanyCreditDebitNoteScreen';
import Supplier from '../components/CompanyPages/Supplier/Supplier';
import SupplierOverview from '../components/CompanyPages/Supplier/SupplierOverview';
import GSTMapping from '../components/CompanyPages/Supplier/GSTMapping';
import PurchaseOrder from '../components/CompanyPages/Purchase/PurchaseOrder';
import PurchaseOrderOverview from '../components/CompanyPages/Purchase/PurchaseOrderOverview';
import CreateNewPROverview from '../components/CompanyPages/Purchase/CreateNewPROverview';
import PurchaseReturn from '../components/CompanyPages/Purchase/PurchaseReturn';
import PurchaseReturnOverview from '../components/CompanyPages/Purchase/PurchaseReturnOverview';
import CreateNewPR from '../components/CompanyPages/Purchase/CreateNewPR';


//Customer
//Customer

import CustomerCreditDebitNote from '../components/CustomerPages/CreditNote/CustomerCreditDebitNote';
import CustomerCreditDebitNoteOverview from  '../components/CustomerPages/CreditNote/CustomerCreditDebitNoteOverview';


//Customer

import Billing from '../components/CustomerPages/Billing/Billing'
import BillingOverview from '../components/CustomerPages/Billing/BillingOverview'
import CreateBilling from '../components/CustomerPages/Billing/CreateBilling'

import Collections from '../components/CustomerPages/Collections/Collections'
import CollectionsOverview from '../components/CustomerPages/Collections/CollectionsOverview'
import CreateCollections from '../components/CustomerPages/Collections/CreateCollections'
import CollectionCreateOverview from '../components/CustomerPages/Collections/CollectionCreateOverview'

import Retailer from '../components/CustomerPages/Retailer/Retailer'
import RetailerOverview from '../components/CustomerPages/Retailer/RetailerOverview'
import DeliveryProcess from '../components/CustomerPages/SalesReturn/DeliveryProcess'

import OrderBooking from '../components/CustomerPages/OrderBooking/OrderBooking'
import OrderBookingOverview from '../components/CustomerPages/OrderBooking/OrderBookingOverview'
import CreateOrderBooking from '../components/CustomerPages/OrderBooking/CreateOrderBooking'

import RetailerChannel from '../components/CustomerPages/Retailer/RetailerChannel'
import RetailerChannelOverview from '../components/CustomerPages/Retailer/RetailerChannelOverview'

import RetailerClass from '../components/CustomerPages/Retailer/RetailerClass'
import RetailerClassOverview from '../components/CustomerPages/Retailer/RetailerClassOverview'

import RetailerGroup from '../components/CustomerPages/Retailer/RetailerGroup'
import RetailerGroupOverview from '../components/CustomerPages/Retailer/RetailerGroupOverview'

import SalesReturn from '../components/CustomerPages/SalesReturn/SalesReturn'
import SalesReturnOverview from '../components/CustomerPages/SalesReturn/SalesReturnOverview'
import CreateSalesReturn from '../components/CustomerPages/SalesReturn/CreateSalesReturn'

import BankMaster from '../components/CustomerPages/BankMaster/BankMaster'
import BankMasterOverview from '../components/CustomerPages/BankMaster/BankMasterOverview'

import CollectionDiscount from '../components/CustomerPages/CollectionDiscountMaster/CollectionDiscount'
import CollectionDiscountOverview from '../components/CustomerPages/CollectionDiscountMaster/CollectionDiscountOverview'
import CreateCollectionDiscount from '../components/CustomerPages/CollectionDiscountMaster/CreateCollectionDiscount'
import CreateCollectionDiscountOverview from '../components/CustomerPages/CollectionDiscountMaster/CreateCollectionDiscountOverview'

import MidasSalesReturn from '../components/CustomerPages//MidasSalesReturn/MidasSalesReturn'
import MidasSalesReturnOverview from '../components/CustomerPages//MidasSalesReturn/MidasSalesReturnOverview'
import CreateMidasSalesReturn from '../components/CustomerPages//MidasSalesReturn/CreateMidasSalesReturn'
import MidasSalesReturnCreateOverview from '../components/CustomerPages/MidasSalesReturn/MidasSalesReturnCreateOverview'
import OrderToBilling from '../components/CustomerPages/Billing/OrderToBilling'

import Godown from '../components/InventoryPages/GoDown/Godown'
import GodownOverview from '../components/InventoryPages/GoDown/GodownOverview'
import CreateGodown from '../components/InventoryPages/GoDown/CreateGodown'
// import StockAdjust from '../components/InventoryPages/StockAdjustment/StockAdjustment'
import StockAdjustment from '../components/InventoryPages/StockAdjustment/StockAdjustment';
import StockAdjustmentOverview from '../components/InventoryPages/StockAdjustment/StockAdjustmentOverview'
import BatchTransfer from '../components/InventoryPages/BatchTransfer/BatchTransfer'
import BatchTransferOverview from '../components/InventoryPages/BatchTransfer/BatchTransferOverview'
import CreateBatchTransfer from '../components/InventoryPages/BatchTransfer/CreateBatchTransfer'
import  createPurchaseOrder  from '../components/CompanyPages/Purchase/CreatePurchaseOrder';
const Routes = () => {
    const Stack= createNativeStackNavigator()
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' 
          screenOptions={{
          
          header: ({ route, options }) => {
            if (options.headerShown === false) return null; 
            return <AppHeader route={route}  />;
          },
        }}>
            <Stack.Screen name="Login" options={{ headerShown: false }} component= {LoginScreen}/>
            <Stack.Screen name="ForgotPassword" options={{ headerShown: false}} component= {ForgotPassword}/>
            <Stack.Screen name="Home" options={{ headerShown: true }} component= {Home}/>
            <Stack.Screen name="Company" options={{ headerShown: true }} component= {Company}/>
            <Stack.Screen name="Distribution" options={{ headerShown: true  }} component= {Distribution}/>
            <Stack.Screen name="Customer" options={{ headerShown: true }} component= {Customer}/>
            <Stack.Screen name="Inventory" options={{ headerShown: true }} component= {Inventory}/>
            <Stack.Screen name="Product & Price" options={{ headerShown: true}} component= {Product}/>
            <Stack.Screen name="Schemes & Claims" options={{ headerShown: true }} component= {Scheme}/>
            <Stack.Screen name="Finance" options={{ headerShown: true }} component= {Finance}/>
            <Stack.Screen name="Configuration" options={{ headerShown: true}} component= {ConfigurationScreen}/>
            <Stack.Screen name="Reports" options={{ headerShown: true }} component= {ReportScreen}/>
            <Stack.Screen name="Utilities" options={{ headerShown: true }} component= {Utilities}/>
            {/*Report Pages */}
            <Stack.Screen name="Purchase Reports" options={{ headerShown: true }} component= {PurchaseReport}/>
            <Stack.Screen name="Sales Reports" options={{ headerShown: true }} component= {SalesReport}/>
            <Stack.Screen name="Live Reports" options={{ headerShown: true }} component= {LiveReport}/>
            <Stack.Screen name="Schemes and Claims" options={{ headerShown: true }} component= {SchemeClaims}/>
            <Stack.Screen name="Collection Reports" options={{ headerShown: true }} component= {CollectionReport}/>
            <Stack.Screen name="Stock Reports" options={{ headerShown: true }} component= {StockReport}/>
            <Stack.Screen name="Bill Print" options={{ headerShown: true }} component= {BillPrint}/>
            <Stack.Screen name="Informative Reports" options={{ headerShown: true }} component= {InformativeReport}/>
            <Stack.Screen name="Financial Reports" options={{ headerShown: true }} component= {FinanceReport}/>
            <Stack.Screen name="Claims Reports" options={{ headerShown: true }} component= {ClaimsReport}/>
            <Stack.Screen name="GST Reports" options={{ headerShown: true }} component= {GSTReport}/>
            <Stack.Screen name="GSTR Reports" options={{ headerShown: true }} component= {GSTRReport}/>
            <Stack.Screen name="General Reports" options={{ headerShown: true }} component= {GeneralReport}/>
            <Stack.Screen name="Master Reports" options={{ headerShown: true }} component= {MasterReport}/>
            {/*Distribution*/}
            <Stack.Screen name="E-Invoice Report" options={{ headerShown: true }} component= {EInvoiceReport}/>
            <Stack.Screen name="Distribution Branch" options={{ headerShown: true }} component= {DistributionBranch}/>
            <Stack.Screen name="Vehicle" options={{ headerShown: true }} component= {Vehicle}/>
            <Stack.Screen name="Vehicle Allocation" options={{ headerShown: true }} component= {VehicleAllocation}/>
             <Stack.Screen name="Delivery Boy" options={{ headerShown: true }} component= {DeliveryBoy}/>
             <Stack.Screen name="Delivery Route" options={{ headerShown: true }} component= {DeliveryBoyRoute}/>
              <Stack.Screen name="Customer Shipping" options={{ headerShown: true }} component= {CustomerShippingAddress}/>
               <Stack.Screen name="Route" options={{ headerShown: true }} component= {Routt}/>
                <Stack.Screen name="Route Coverage" options={{ headerShown: true }} component= {RouteCoveragePlan}/>
              <Stack.Screen name="Salesman" options={{ headerShown: true }} component= {Salesman}/>
               <Stack.Screen name="Salesman Route" options={{ headerShown: true }} component= {SalesmanRouteMapping}/>
                <Stack.Screen name="Merchandiser" options={{ headerShown: true }} component= {Merchandiser}/>
                <Stack.Screen name="Merchandiser Route" options={{ headerShown: true }} component= {MerchandiserRoute}/>
                <Stack.Screen name="Stockiest List" options={{ headerShown: true }} component= {StockiestTMR}/>  
                <Stack.Screen name="EInvoiceOverview" options={{ headerShown: true }} component= {EInvoiceOverview}/>  
                <Stack.Screen name="DistributionBranchOverview" options={{ headerShown: true }} component= {DistributionBOverview}/>  
                <Stack.Screen name="VehicleOverview" options={{ headerShown: true }} component= {VehicleOverview}/>
                <Stack.Screen name="VehicleAOverview" options={{ headerShown: true }} component= {VehicleAOverview}/>
                <Stack.Screen name="DeliveryBoyOverview" options={{ headerShown: true }} component= {DelivoryBoyOverview}/>
                <Stack.Screen name="DeliveryBoyRouteOverview" options={{ headerShown: true }} component= {DeliveryBoyRouteOverview}/>
                <Stack.Screen name="CustomerShippingAdressOverview" options={{ headerShown: true }} component= {CustomerShippingAdressOverview}/>
                <Stack.Screen name="RouttOverview" options={{ headerShown: true }} component= {RouttOverview}/>  
                <Stack.Screen name="RouteCoverageOverview" options={{ headerShown: true }} component= {RouteCoverageOverview}/>
                <Stack.Screen name="SalesmanOverview" options={{ headerShown: true }} component= {SalesmanOverview}/>
                <Stack.Screen name="SalesmanRMOverview" options={{ headerShown: true }} component= {SalesmanRMOverview}/>
                <Stack.Screen name="MerchandiserOverview" options={{ headerShown: true }} component= {MerchandiserOverview}/>
                <Stack.Screen name="MerchandiserRouteOverview" options={{ headerShown: true }} component= {MerchandiserRouteOverview}/>
                <Stack.Screen name="StockiestOverview" options={{ headerShown: true }} component= {StockiestOverview}/>
                <Stack.Screen name="CreateStockiest" options={{ headerShown: true }} component= {CreateStockiest}/>
                <Stack.Screen name="CreateDB" options={{ headerShown: true }} component= {CreateDB}/>
                <Stack.Screen name="CreateVehicle" options={{ headerShown: true }} component= {CreateVehicle}/>
                <Stack.Screen name="CreateVA" options={{ headerShown: true }} component= {CreateVA}/>
                <Stack.Screen name="CreateDelivery" options={{ headerShown: true }} component= {CreateR}/>
                <Stack.Screen name="CreateSA" options={{ headerShown: true }} component= {CreateSA}/>
                <Stack.Screen name="CreateRoute" options={{ headerShown: true }} component= {CreateDelivery}/>
                <Stack.Screen name="CreateRCS" options={{ headerShown: true }} component= {CreateRCS}/>
                <Stack.Screen name="CreateSRM" options={{ headerShown: true }} component= {CreateSalesRouteMap}/>
                <Stack.Screen name="CreateMerchandiser" options={{ headerShown: true }} component= {CreateMerchandiser}/>
                <Stack.Screen name="CreateMerchRoute" options={{ headerShown: true }} component= {CreateMerchRoute}/>
                <Stack.Screen name="CreateEI" options={{ headerShown: true }} component= {CreateEI}/>
              {/*Product*/}
              <Stack.Screen name="Product" options={{ headerShown: true }} component= {ProductAndPricing}/>
              <Stack.Screen name="Price Discount" options={{ headerShown: true }} component= {PriceDiscount}/>
              <Stack.Screen name="UOM Master" options={{ headerShown: true }} component= {UOM}/>
              <Stack.Screen name="GST Tax Structure" options={{ headerShown: true }} component= {GST}/>
              <Stack.Screen name="GST Product Tax Structure" options={{ headerShown: true }} component= {GTax}/>
              <Stack.Screen name="GSTOverview" options={{ headerShown: true }} component= {GSTOverview}/>
              <Stack.Screen name="GtaxOverview" options={{ headerShown: true }} component= {GtaxOverview}/>
              <Stack.Screen name="PAPOverview" options={{ headerShown: true }} component= {PAPOverview}/>
              {/*Config Pages*/}
              <Stack.Screen name="User Profile" options={{ headerShown: true }} component= {UserProfile}/>
              <Stack.Screen name="User Group" options={{ headerShown: true }} component= {UserGroup}/>
              <Stack.Screen name="JC Calendar" options={{ headerShown: true }} component= {JC}/>
              <Stack.Screen name="Holiday Calendar" options={{ headerShown: true }} component= {HolidayCalander}/>
              <Stack.Screen name="Bill Print Configuration" options={{ headerShown: true }} component= {BillPrintConfig}/>
              <Stack.Screen name="Pda Export" options={{ headerShown: true }} component= {Pda}/>
              <Stack.Screen name="Distributor Configuration" options={{ headerShown: true }} component= {DistribuorConfig}/>
              <Stack.Screen name="Day End" options={{ headerShown: true }} component= {DayEnd}/>
              <Stack.Screen name="ETL" options={{ headerShown: true }} component= {ETL}/>
              <Stack.Screen name="E Invoice Authentication" options={{ headerShown: true }} component= {Einvoice}/>
              <Stack.Screen name="UserProfileOverview" options={{ headerShown: true }} component= {UserProfileOverview}/>
              <Stack.Screen name="UserGroupOverview" options={{ headerShown: true }} component= {UserGroupOverview}/>
              <Stack.Screen name="JCOverview" options={{ headerShown: true }} component= {JCOverview}/>
              <Stack.Screen name="HolidayCalanderOverview" options={{ headerShown: true }} component= {HolidayCalanderOverview}/>
              <Stack.Screen name="CreateNew" options={{ headerShown: true }} component= {CreateNew}/>
              <Stack.Screen name="CreateHoliday" options={{ headerShown: true }} component= {CreateHoliday}/>
              <Stack.Screen name="CreateHolidayOverview" options={{ headerShown: true }} component= {CreateHolidayOverview}/>
              <Stack.Screen name="CreateScreenName" options={{ headerShown: true }} component= {CreateScreenName}/>
              {/*Scheme*/ }
              {/* <Stack.Screen name="SchemePagesRoute" options={{ headerShown: true }} component= {SchemePagesRoute}/> */}
              
              {/* <Stack.Screen name="Claim Type" component={ClaimType} />
            <Stack.Screen name="Claim Overview" component={ClaimOverview} />
            <Stack.Screen name="GST Claim" component={GSTClaim} />
            <Stack.Screen name="GSTClaimOverview" component={GSTClaimOverview} />
            <Stack.Screen name="CreateNewGSTClaim" component={CreateNewGSTClaim} />
            <Stack.Screen name="Invoice To Claim" component={InvoiceToClaim} />
            <Stack.Screen name="Leakage Damage
            " component={LeakageClaim} />
            <Stack.Screen name="LeakageDamageReturnClaimOverview" component={LeakageDamageReturnClaimOverview} />
            <Stack.Screen name="CreateLeakageDamageReturnClaim" component={CreateLeakageDamageReturnClaim} />
            <Stack.Screen name="Manual Claim" component={ManualClaim} />
            <Stack.Screen name="ManualClaimOverview" component={ManualClaimOverview} />
            <Stack.Screen name="CreateNewManualClaim" component={CreateNewManualClaim} />
            <Stack.Screen name="Others Claim" component={OtherClaim} />
            <Stack.Screen name="Others Services" component={OtherServiceClaims} />
            <Stack.Screen name="OtherServiceClaimsOverview" component={OtherServiceClaimsOverview} />
            <Stack.Screen name="Program Services" component={Program} />
            <Stack.Screen name="ProgramServiceClaimOverview" component={ProgramServiceClaimOverview} />
            <Stack.Screen name="Program Material" component={ProgramMaterial} />
            <Stack.Screen name="Scheme" component={SchemeScreen} />
            <Stack.Screen name="SchemeOverview" component={SchemeOverview} />
            <Stack.Screen name="Secondary Scheme Claim" component={SecondarySchemeClaim} />
            <Stack.Screen name="SKU" component={SKU} />
            <Stack.Screen name="CreateSKUOverview" component={CreateSKUOverview} />
            <Stack.Screen name="TBTL Claim" component={TBTLClaim} />
            <Stack.Screen name="TBTLClaimOverview" component={TBTLClaimOverview} />
            <Stack.Screen name="To Claim" component={ToClaim} />
             */}


             <Stack.Screen name="ClaimType" component={ClaimType} />
            <Stack.Screen name="ClaimOverview" component={ClaimOverview} />
            <Stack.Screen name="GSTClaim" component={GSTClaim} />
            <Stack.Screen name="GSTClaimOverview" component={GSTClaimOverview} />
            <Stack.Screen name="CreateNewGSTClaim" component={CreateNewGSTClaim} />
            <Stack.Screen name="InvoiceToClaim" component={InvoiceToClaim} />
            <Stack.Screen name="InvoicetoClaimOverview" component={InvoicetoClaimOverview} />
            <Stack.Screen name="LeakageDamage" component={LeakageClaim} />
            <Stack.Screen name="LeakageDamageReturnClaimOverview" component={LeakageDamageReturnClaimOverview} />
            <Stack.Screen name="CreateLeakageDamageReturnClaim" component={CreateLeakageDamageReturnClaim} />
            <Stack.Screen name="ManualClaim" component={ManualClaim} />
            <Stack.Screen name="ManualClaimOverview" component={ManualClaimOverview} />
            <Stack.Screen name="CreateNewManualClaim" component={CreateNewManualClaim} />
            <Stack.Screen name="OthersClaim" component={OtherClaim} />
            <Stack.Screen name="OthersServices" component={OtherServiceClaims} />
            <Stack.Screen name="OtherServiceClaimsOverview" component={OtherServiceClaimsOverview} />
            <Stack.Screen name="ProgramServices" component={Program} />
            <Stack.Screen name="ProgramServiceClaimOverview" component={ProgramServiceClaimOverview} />
            <Stack.Screen name="ProgramMaterial" component={ProgramMaterial} />
            <Stack.Screen name="Scheme" component={SchemeScreen} />
            <Stack.Screen name="SchemeOverview" component={SchemeOverview} />
            <Stack.Screen name="SecondarySchemeClaim" component={SecondarySchemeClaim} />
            <Stack.Screen name="SKU" component={SKU} />
            <Stack.Screen name="CreateSKUOverview" component={CreateSKUOverview} />
            <Stack.Screen name="TBTLClaim" component={TBTLClaim} />
            <Stack.Screen name="TBTLClaimOverview" component={TBTLClaimOverview} />
            <Stack.Screen name="ToClaim" component={ToClaim} />
            <Stack.Screen name="CreateNewClaimType" component={CreateNewClaimType} />
            <Stack.Screen name="OtherClaimOverview" component={OtherClaimOverview} />
            <Stack.Screen name="ProgramMaterialOverview" component={ProgramMaterialOverview} />
            <Stack.Screen name="ToClaimOverview" component={ToClaimOverview} />

            {/* Customer */}
            {/* 📌 Goods Receipt Note */}
          <Stack.Screen name="GoodsReceiptsNote" component={GoodsReceiptsNote} />
          <Stack.Screen name="GoodsReceiptsNoteOverview" component={GoodsReceiptsNoteOverview} />
          <Stack.Screen name="CreateNewGRN" component={CreateNewGRN} />

          {/* 📌 Company Credit/Debit Note */}
          <Stack.Screen name="CreditDebitNote" component={CreditDebitNote} />
          <Stack.Screen name="CompanyCreditDebitNoteScreenOverview" component={CompanyCreditDebitNoteScreenOverview} />
          <Stack.Screen name="CreateCompanyCreditDebitNoteScreen" component={CreateCompanyCreditDebitNoteScreen} />

          {/* 📌 Supplier */}
          <Stack.Screen name="Supplier" component={Supplier} />
          <Stack.Screen name="SupplierOverview" component={SupplierOverview} />
          <Stack.Screen name="GSTMapping" component={GSTMapping} />

          {/* 📌 Purchase Order */}
          <Stack.Screen name="PurchaseOrder" component={PurchaseOrder} />
          <Stack.Screen name="PurchaseOrderOverview" component={PurchaseOrderOverview} />
          <Stack.Screen name="CreateNewPO" component={createPurchaseOrder} />
          <Stack.Screen name="CreateNewPROverview" component={CreateNewPROverview} />

          {/* 📌 Purchase Return */}
          <Stack.Screen name="PurchaseReturn" component={PurchaseReturn} />
          <Stack.Screen name="PurchaseReturnOverview" component={PurchaseReturnOverview} />
          <Stack.Screen name="CreateNewPR" component={CreateNewPR} />

          {/* {/Finance/} */}
          <Stack.Screen name="AccountCalendar"  component= {FinanceScreen}/>


          {/*Customer */}
          <Stack.Screen name="CustomerCreditDebitNote" component={CustomerCreditDebitNote} />
          <Stack.Screen name="CustomerCreditDebitNoteOverview" component={CustomerCreditDebitNoteOverview} />
          {/*Customer */}
{/* <Stack.Screen name="CustomerCreditDebitNote" component={CustomerCreditDebitNote} />
<Stack.Screen name="CustomerCreditDebitNoteOverview" component={CustomerCreditDebitNoteOverview} /> */}
{/* Billing Screens */}
<Stack.Screen name="Billing" component={Billing} />
<Stack.Screen name="BillingOverview" component={BillingOverview} />
<Stack.Screen name="CreateBilling" component={CreateBilling} />

{/* Collections Screens */}
<Stack.Screen name="Collections" component={Collections} />
<Stack.Screen name="CollectionsOverview" component={CollectionsOverview} />
<Stack.Screen name="CreateCollections" component={CreateCollections} />
<Stack.Screen name="CollectionCreateOverview" component={CollectionCreateOverview} />

<Stack.Screen name="Retailer" component={Retailer} />
<Stack.Screen name="RetailerOverview" component={RetailerOverview} />
<Stack.Screen name="DeliveryProcess" component={DeliveryProcess} />

<Stack.Screen name="OrderBooking" component={OrderBooking} />
<Stack.Screen name="OrderBookingOverview" component={OrderBookingOverview} />
<Stack.Screen name="CreateOrderBooking" component={CreateOrderBooking} />

<Stack.Screen name="RetailerChannel" component={RetailerChannel} />
<Stack.Screen name="RetailerChannelOverview" component={RetailerChannelOverview} />

<Stack.Screen name="RetailerClass" component={RetailerClass} />
<Stack.Screen name="RetailerClassOverview" component={RetailerClassOverview} />

<Stack.Screen name="RetailerGroup" component={RetailerGroup} />
<Stack.Screen name="RetailerGroupOverview" component={RetailerGroupOverview} />

<Stack.Screen name="SalesReturn" component={SalesReturn} />
<Stack.Screen name="SalesReturnOverview" component={SalesReturnOverview} />
<Stack.Screen name="CreateSalesReturn" component={CreateSalesReturn} />

<Stack.Screen name="BankMaster" component={BankMaster} />
<Stack.Screen name="BankMasterOverview" component={BankMasterOverview} />

<Stack.Screen name="CollectionDiscount" component={CollectionDiscount} />
<Stack.Screen name="CollectionDiscountOverview" component={CollectionDiscountOverview} />
<Stack.Screen name="CreateCollectionDiscount" component={CreateCollectionDiscount} />
<Stack.Screen name="CreateCollectionDiscountOverview" component={CreateCollectionDiscountOverview} />


<Stack.Screen name="MidasSalesReturn" component={MidasSalesReturn} />
<Stack.Screen name="MidasSalesReturnOverview" component={MidasSalesReturnOverview} />
<Stack.Screen name="CreateMidasSalesReturn" component={CreateMidasSalesReturn} />
<Stack.Screen name="MidasSalesReturnCreateOverview" component={MidasSalesReturnCreateOverview} />

<Stack.Screen name="OrderToBilling" component={OrderToBilling} />



  <Stack.Screen name="Godown" component={Godown} />
  <Stack.Screen name="GodownOverview" component={GodownOverview} />
  <Stack.Screen name="CreateGoDown" component={CreateGodown} />
   <Stack.Screen name="Stock Adjust" component={StockAdjustment} />
    <Stack.Screen name="StockAdjustmentOverview" component={StockAdjustmentOverview} />
     <Stack.Screen name="Batch Transfer" component={BatchTransfer} />
      <Stack.Screen name="BatchTransferOverview" component={BatchTransferOverview} />
       <Stack.Screen name="CreateBatchTransfer" component={CreateBatchTransfer} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes