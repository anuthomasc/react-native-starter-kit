import {
    StyleSheet,
    
} from 'react-native';
import { responsiveWidth, responsiveFontSize, responsiveHeight } from '../helpers/Responsive';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
    },
    toolBar: {
        alignItems: 'center',
        width: responsiveWidth(100),
        paddingTop: responsiveWidth(5),
        paddingBottom: responsiveWidth(5),
        //justifyContent:'center'
        borderWidth: 0,
        borderRadius: 0,
        borderColor: '#ddd',
        //borderBottomWidth: 0,
        shadowColor: '#ddd',
        // shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 1.0,
        shadowRadius: 5,
        elevation: 1,
    },
    contentContainer: {
        //borderColor: '#DD0000',borderWidth:2,
        flex: 1,
        width: responsiveWidth(100)
    },
    heading: {
        width: responsiveWidth(100),
        paddingLeft: responsiveWidth(6),
        paddingRight: responsiveWidth(6),
        paddingTop: responsiveWidth(10),
        paddingBottom: responsiveWidth(10)
    },
    mainHeading: {
        color: '#000',
        fontSize: responsiveFontSize(3)
    },
    smallHeading: {
        color: '#757575',
        fontSize: responsiveFontSize(2.3)
    },
    itemContainer: {
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderRadius: 0,
        borderTopColor: '#ddd',
        //borderBottomWidth: 0,
        //shadowColor: '#ddd',
        borderBottomColor: '#ddd',
        // shadowOffset: { width: 0, height: 9 },
       // shadowOpacity: 1.0,
        //shadowRadius: 5,
        elevation: 1,
        //alignItems: 'center',
        justifyContent: 'center',
        marginBottom: responsiveWidth(5),
    },
    itemImage: {
        width: responsiveWidth(23),
        height: responsiveWidth(25),
        borderRadius: 5,
        
    },
    itemData: {
        padding: responsiveWidth(4),
        //justifyContent: 'center',
        flex: 1,
        //borderColor: '#dd0000', borderWidth: 2,
    },
    newsHeading: {
        fontSize: responsiveFontSize(2.8),
        color: '#000'
    },
    itemContentContainer: {
        flexDirection: 'row',
        padding: responsiveWidth(4),
        alignItems: 'center',
    },
    socialIconContainer: {
        flexDirection: 'row',
        borderTopColor: '#ddd', borderTopWidth: 1,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        width: responsiveWidth(100),
        alignItems: 'center',
        padding: responsiveWidth(3),
        shadowColor: '#ddd',
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
        flexDirection:'row',
        position: 'absolute',
        right: responsiveWidth(3)
    },
    innerTimeContainer:{
        flexDirection:'row',
        flex:1,
        paddingTop:responsiveWidth(2)
        //borderColor: '#DD0000',borderWidth:2,
    },
    timeText:{
        marginLeft:responsiveWidth(5)
        //position:'absolute',
        //right:0
    }
})

export default styles;