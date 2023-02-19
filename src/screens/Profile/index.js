import React from 'react'
import { Text, View, Image } from 'react-native';
import Button from '../../components/Button';
import { styles } from './styles';

const Profile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.contact}>
                    <Text style={styles.name}>نام کاربری: صدرا</Text>
                    <Text style={styles.email}>ایمیل: {'sadrabroo@gmail.com'}</Text>
                </View>
                <View style={styles.imageProfile}>
                    <Image source={require('../../assets/tabs/profile.png')} style={styles.image} />
                </View>
            </View>
            <View style={styles.line} />
            <Text style={[styles.email, { textAlign: "center" }]}>سازنده: محمد صدرا برومند</Text>

            <Button style={styles.button} text="خروج از حساب کاربری" />
        </View>
    )
}

export default React.memo(Profile);
