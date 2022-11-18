import React from 'react'
import ArrowImg from '../../../img/Arrow1.svg'

function Button(props) {
    return <button className="mainbutton" style={{ margin: '3em 0 0 8em' }} onClick={
        function (event) {
            event.preventDefault();
            props.onChangeMode();
        }
    }>
        <div><img className="ArrowImg" src={props.image} /></div>
        {props.title}
    </button>
}

function ArtPage() {
    return <artpage>
        <div className="artheader"></div>
        <div className="artheader2"></div>
        <div className="artheader3">Want &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to <br></br>search <br></br>by&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; artist?</div>
        <div><Button title="go ARTIST" image={ArrowImg} onChangeMode={function () {
            window.location.href = "/ArtistPage"
        }}></Button></div>
    </artpage>
}

export default ArtPage;

