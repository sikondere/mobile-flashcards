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
        body: 'you have not taken the quiz yet',
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
                    console.log(` status granted: ${granted}`)
                    if (granted) {
                        Notifications.cancelAllScheduledNotificationsAsync().then(
                            () => {
                                Notifications.scheduleNotificationAsync({
                                    content: createNotification(),
                                    trigger: {
                                        hour: 11, 
                                        minute: 10, 
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