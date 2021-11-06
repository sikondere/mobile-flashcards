import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';

const NOTIFICATION_KEY = 'mobile-flashcards:notifications';

export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
        Notifications.cancelAllScheduledNotificationsAsync
    );
}

function createNotification() {
    return {
        title: 'take quiz',
        body: 'study',
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: true,
            vibrate: true,
        },
    };
}

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Notifications.requestPermissionsAsync().then(({ granted }) => {
                    console.log(granted)
                    if (granted) {
                        Notifications.cancelAllScheduledNotificationsAsync().then(
                            () => {
                                Notifications.scheduleNotificationAsync({
                                    content: createNotification(),
                                    trigger: {
                                        hour: 9, 
                                        minute: 30, 
                                        repeats: true 
                                    },
                                }).then(() => {
                                    AsyncStorage.setItem(
                                        NOTIFICATION_KEY,
                                        JSON.stringify(true)
                                    );
                                });
                            }
                        );
                    }
                });
            }
        });
}