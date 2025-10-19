import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const TimelineStep = ({ title, date, isCompleted, isCurrent }) => (
  <View style={styles.stepContainer}>
    <View style={styles.iconContainer}>
      <View
        style={[
          styles.circle,
          isCompleted && styles.completedCircle,
          isCurrent && styles.currentCircle,
        ]}
      />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.stepTitle}>{title}</Text>
      {date && <Text style={styles.stepDate}>{date}</Text>}
    </View>
  </View>
);

const TrackRefundScreen = () => {
  const route = useRoute();
  const refund = route.params?.refundDetails;

  // ✅ Step timeline (common for all refunds)
  const steps = [
    { title: 'Return Initiated', key: 'Return Pending', date: 'Jan 15, 2024' },
    { title: 'Item Received by Seller', key: 'Item Received', date: 'Jan 18, 2024' },
    { title: 'Quality Check Passed', key: 'Quality Passed', date: 'Jan 19, 2024' },
    { title: 'Refund Initiated', key: 'Refund Initiated', date: 'Jan 20, 2024' },
    { title: 'Refund Successful', key: 'Refund Successful', date: 'Jan 22, 2024' },
  ];

  // ✅ Dynamically find current step based on refund.status (case-insensitive + flexible)
  const normalizedStatus = refund?.status?.toLowerCase()?.trim() || '';
  const currentStepIndex = steps.findIndex(
    step => step.key.toLowerCase() === normalizedStatus
  );

  // ✅ If refund is successful → mark all as completed
  const isRefundSuccessful = normalizedStatus.includes('successful');

  // ✅ Compute statuses dynamically
  const updatedSteps = steps.map((step, index) => {
    if (isRefundSuccessful) {
      return { ...step, status: 'completed' };
    }
    if (index < currentStepIndex) return { ...step, status: 'completed' };
    if (index === currentStepIndex) return { ...step, status: 'current' };
    return { ...step, status: 'pending' };
  });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Track Refund</Text>
      <Text style={styles.subtitle}>Refund ID: {refund?.id}</Text>
      <Text style={styles.refundAmount}>Refund Amount: ₹{refund?.refundAmount}</Text>

      <View style={styles.timelineContainer}>
        {updatedSteps.map((step, index) => (
          <View key={index}>
            <TimelineStep
              title={step.title}
              date={step.date}
              isCompleted={step.status === 'completed'}
              isCurrent={step.status === 'current'}
            />
            {index < updatedSteps.length - 1 && (
              <View
                style={[
                  styles.connectingLine,
                  (index < currentStepIndex || isRefundSuccessful) && styles.completedConnectingLine,
                ]}
              />
            )}
          </View>
        ))}
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>What happens next?</Text>
        <Text style={styles.infoText}>
          {isRefundSuccessful
            ? `🎉 Your refund of ₹${refund?.refundAmount} has been successfully processed!`
            : `Your refund of ₹${refund?.refundAmount} is currently in progress. 
              The amount will be credited to your original payment method within 5–7 business days.`}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 5 },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 10 },
  refundAmount: { fontSize: 18, fontWeight: 'bold', color: '#1f75bcff', marginBottom: 30 },
  timelineContainer: { paddingHorizontal: 10 },
  stepContainer: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 20 },
  iconContainer: { alignItems: 'center', marginRight: 15 },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  completedCircle: { backgroundColor: '#4caf50', borderColor: '#4caf50' },
  currentCircle: { backgroundColor: '#1f75bcff', borderColor: '#1f75bcff' },
  connectingLine: {
    width: 2,
    height: 35,
    backgroundColor: '#ccc',
    position: 'absolute',
    left: 11,
    top: 24,
  },
  completedConnectingLine: { backgroundColor: '#4caf50' },
  textContainer: { flex: 1 },
  stepTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  stepDate: { fontSize: 12, color: '#999', marginTop: 2 },
  infoBox: {
    backgroundColor: '#f0f8ff',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    borderWidth: 1,
    borderColor: '#e6f7ff',
  },
  infoTitle: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 5 },
  infoText: { fontSize: 14, color: '#555', lineHeight: 20 },
});

export default TrackRefundScreen;
