import React, { useState } from 'react';

function Modal() {

    let [modal, closeModal] = useState(true);

    return (
        <div className="bgrd">
            <div className="modal"><h1>이건 모달입니다.</h1></div>
        </div>
    )
}



function ArtistPage() {

    let [modal, setModal] = useState(false);

    return (
        <div>
            <div>ArtistPage</div>
            <div><button onClick={() => { setModal(true) }}>모달</button></div>
            {modal === true ? <Modal /> : null}
        </div>
    )
}



export default ArtistPage;