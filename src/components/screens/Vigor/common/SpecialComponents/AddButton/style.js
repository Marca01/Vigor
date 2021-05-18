import { StyleSheet } from "react-native";
import COLOR from '../../../../../../constants/color'

export const styles = StyleSheet.create({
    newPostBtn: {
        position: 'absolute',
        alignItems: 'center',
    },
    newPostBtn_optionsBtn: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        backgroundColor: COLOR.main
    },
    newPostBtn_rout: {
        width: 56,
        height: 56,
        borderRadius: 56 / 2,
        // borderWidth: 1,
        // borderColor: '#ffece3',
        backgroundColor: COLOR.white,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        shadowColor: COLOR.gray,
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        // elevation: 15,
    },
    newPostBtn_rin: {
        width: 44,
        height: 44,
        borderRadius: 44 / 2,
        backgroundColor: COLOR.main,
        justifyContent: "center",
        alignItems: "center",
    },
})