import {
    StyleSheet,
} from 'react-native';
import { responsiveWidth, responsiveFontSize, responsiveHeight } from '../helpers/Responsive';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        height: responsiveHeight(100),
        //borderColor: '#DD0000',borderWidth:2,
    },
    imageContainer: {
        width: responsiveWidth(100),
       // height: responsiveHeight(40),
        //borderColor: '#DD0000',borderWidth:2,
    },
    newsDescriptionContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: responsiveWidth(2),
        //borderColor: '#DD0000',borderWidth:2,
    },
    imageBackground: {
        width: responsiveWidth(100),
        height: responsiveHeight(40),
    },
    newsHeading: {
       // position: 'absolute',
       // bottom: responsiveWidth(5),
        color: '#000',
        fontSize: responsiveFontSize(3.5),
        marginTop: responsiveWidth(3),
        marginLeft: responsiveWidth(3),
        marginRight: responsiveWidth(3),
        marginBottom: responsiveWidth(1),

    },
    socialIconContainer: {
        flexDirection: 'row',
        borderColor: '#ddd', borderWidth: 1,
        // borderWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        width: responsiveWidth(100),
        alignItems: 'center',
        padding: responsiveWidth(3),
        shadowColor: '#ddd',
        position:'absolute',
        bottom:0
    },
    socialSaveIcon: {
        width: responsiveWidth(7),
        height: responsiveWidth(7),
    },
    socialShareIcon: {
        width: responsiveWidth(7),
        height: responsiveWidth(7),
        marginLeft: responsiveWidth(6)
    },
    likeIcon: {
        marginRight: responsiveWidth(6),
        width: responsiveWidth(7),
        height: responsiveWidth(7),
    },
    disLikeIcon: {
        width: responsiveWidth(7),
        height: responsiveWidth(7),
    },
    likeDislikeContainer: {
        flexDirection: 'row',
        position: 'absolute',
        right: responsiveWidth(3)
    },
    contentText: {
        fontSize: responsiveFontSize(2.3),
        textAlign: 'left',
        color:'#000',
        textAlign: 'justify',
        lineHeight: 30,
    },
    readMoreText: {
        fontSize: responsiveFontSize(2.4),
        color: 'red'
    },
    backGroundImage: {
        width: responsiveWidth(100),
        height: responsiveHeight(40),
        position: 'absolute'
    },
    scrollView:{
        //height:responsiveHeight(100),
        
    },
    contentContainer:{
        flex:1,
        //height: responsiveHeight(60),
       // borderColor: '#DD0000',borderWidth:2,
    }

})

export default styles;