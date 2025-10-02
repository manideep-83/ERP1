import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import all SchemePages screens
import ClaimType from '../components/SchemePages/ClaimType/ClaimType';
import ClaimOverview from '../components/SchemePages/ClaimType/ClaimOverview';
import GSTClaim from '../components/SchemePages/GSTClaim/GSTClaim';
import GSTClaimOverview from '../components/SchemePages/GSTClaim/GSTClaimOverview';
import CreateNewGSTClaim from '../components/SchemePages/GSTClaim/CreateNewGSTClaim';
import InvoiceToClaim from '../components/SchemePages/InvoiceToClaim/InvoicetoClaimOverview';
import LeakageClaim from '../components/SchemePages/LeakageClaim/LeakageDamageReturnClaim';
import LeakageDamageReturnClaimOverview from '../components/SchemePages/LeakageClaim/LeakageDamageReturnClaimOverview';
import CreateLeakageDamageReturnClaim from '../components/SchemePages/LeakageClaim/CreateLeakageDamageReturnClaim';
import ManualClaim from '../components/SchemePages/ManualClaim/ManualClaim';
import ManualClaimOverview from '../components/SchemePages/ManualClaim/ManualClaimOverview';
import CreateNewManualClaim from '../components/SchemePages/ManualClaim/CreateManualClaim';
import OtherClaim from '../components/SchemePages/OtherClaim/OtherClaim';
import OtherServiceClaims from '../components/SchemePages/OtherClaim/OtherServiceClaims';
import OtherServiceClaimsOverview from '../components/SchemePages/OtherClaim/OtherServiceClaimsOverview';
import ProgramServiceClaim from '../components/SchemePages/Program/ProgramServiceClaim';
import ProgramServiceClaimOverview from '../components/SchemePages/Program/ProgramServiceClaimOverview';
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

const Stack = createStackNavigator();

const SchemePagesRoute = () => (
  <Stack.Navigator initialRouteName="SchemeScreen">
    <Stack.Screen name="ClaimType" component={ClaimType} />
    <Stack.Screen name="ClaimOverview" component={ClaimOverview} />
    <Stack.Screen name="GSTClaim" component={GSTClaim} />
    <Stack.Screen name="GSTClaimOverview" component={GSTClaimOverview} />
    <Stack.Screen name="CreateNewGSTClaim" component={CreateNewGSTClaim} />
    <Stack.Screen name="InvoiceToClaim" component={InvoiceToClaim} />
    <Stack.Screen name="LeakageClaim" component={LeakageClaim} />
    <Stack.Screen name="LeakageDamageReturnClaimOverview" component={LeakageDamageReturnClaimOverview} />
    <Stack.Screen name="CreateLeakageDamageReturnClaim" component={CreateLeakageDamageReturnClaim} />
    <Stack.Screen name="ManualClaim" component={ManualClaim} />
    <Stack.Screen name="ManualClaimOverview" component={ManualClaimOverview} />
    <Stack.Screen name="CreateNewManualClaim" component={CreateNewManualClaim} />
    <Stack.Screen name="OtherClaim" component={OtherClaim} />
    <Stack.Screen name="OtherServiceClaims" component={OtherServiceClaims} />
    <Stack.Screen name="OtherServiceClaimsOverview" component={OtherServiceClaimsOverview} />
    <Stack.Screen name="ProgramServiceClaim" component={ProgramServiceClaim} />
    <Stack.Screen name="ProgramServiceClaimOverview" component={ProgramServiceClaimOverview} />
    <Stack.Screen name="ProgramMaterialOverview" component={ProgramMaterialOverview} />
    <Stack.Screen name="SchemeScreen" component={SchemeScreen} />
    <Stack.Screen name="SchemeOverview" component={SchemeOverview} />
    <Stack.Screen name="SecondarySchemeClaim" component={SecondarySchemeClaim} />
    <Stack.Screen name="SKU" component={SKU} />
    <Stack.Screen name="CreateSKUOverview" component={CreateSKUOverview} />
    <Stack.Screen name="TBTLClaim" component={TBTLClaim} />
    <Stack.Screen name="TBTLClaimOverview" component={TBTLClaimOverview} />
    <Stack.Screen name="ToClaim" component={ToClaim} />
    <Stack.Screen name="ToClaimOverview" component={ToClaimOverview} />
  </Stack.Navigator>
);

export default SchemePagesRoute;
