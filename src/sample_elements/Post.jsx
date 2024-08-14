import { useState } from 'react';

//스타일 지정
const styles = {
    wrapper : {
        margin : 8,
        padding : 8,
        border : "1px solid grey",
        borderRadius : 16,
        display : "flex",
        flexDirection : "row"
    },
    img : {
        width : 50,
        height : 50,
        borderRadius : 25,
    },
    writerTxt : {
        color : 'black',
        fontSize : 16,
        fontWeight : "bold"
    },
    subjectTxt : {
        color : 'black',
        fontSize : 16,
    },
    content : {
        justifyContent : "center",
        flexDirection : "column",
        display: "flex",
        marginLeft : 8
    }
}



function Post(props) {
    const [isClicked, setIsClicked] = useState(false);
    //해당 포스트에 텍스트 컬러를 빨강색으로 변경
    const postHandler = ( event, writer, subject) => {
        setIsClicked( (isClicked) => !isClicked); // 클릭 시 상태 반전
        //console.log(`debug >>> ${writer}. ${subject}`);
        //event.target.style.color= 'red';
    };
    return(
        <div style={styles.wrapper} onClick={(event) => postHandler( event,props.writer,props.subject)}>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                    style={styles.img} />
            </div>
            <div style={styles.content}>
                <span style={styles.writerTxt}><p style={{ color : (isClicked ? "red" : "black")}}>{props.writer}</p></span>
                <span style={styles.subjectTxt}><p style={{ color : (isClicked ? "red" : "black")}}>{props.subject}</p></span>
            </div>
        </div>
    );
}

export default Post ;