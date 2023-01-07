import React,{useState} from "react";
import {saveAs} from "file-saver";
import petitionFile from "../images/ariza.jpg";

export default function Exam() {
    
    const handleClick = ()=>{
        let url = petitionFile
        saveAs(url, "Ariza na'muna");
    }

    const [petition, setPetition] = useState();
    const [passport, setPassport] = useState();
    const [medical, setMedical] = useState();
    const [doctor, setDoctor] = useState();
    const [picture, setPicture] = useState();

    function handleChange(e) {
        setPetition(URL.createObjectURL(e.target.files[0]));
    }

    function handleChangeTwo(e) {
        setPassport(URL.createObjectURL(e.target.files[0]));
    }

    function handleChangeTree(e) {
        setMedical(URL.createObjectURL(e.target.files[0]));
    }

    function handleChangeFour(e) {
        setDoctor(URL.createObjectURL(e.target.files[0]));
    }
    
    function handleChangeFive(e) {
        setPicture(URL.createObjectURL(e.target.files[0]));
    }

    return(
        <div className="exam">
            <h3>Futbol akademiyasi tarbiyalanuvchilarisafiga qo'shiling</h3>
            <div className="exam-form">
                <h4>Xurmatli ota-onalar ushbu formani farzandingiz nomidan to'ldiring</h4>
                <div className="age d-flex">
                    <h6 className="title">Yosh toifangizni belgilang:</h6>
                    <select name="age" id="age">
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                    </select>
                </div>
                <div className="region d-flex">
                    <h6 className="title">Yashash hududingiz:</h6>
                    <select name="region" id="region">
                        <option value="Andijon">Andijon</option>
                        <option value="Buxoro">Buxoro</option>
                        <option value="Jizzax">Jizzax</option>
                        <option value="Farg'ona">Farg'ona</option>
                        <option value="Namangan">Namangan</option>
                        <option value="Navoiy">Navoiy</option>
                        <option value="Samarqand">Samarqand</option>
                        <option value="Qashqadaryo">Qashqadaryo</option>
                        <option value="Surxandaryo">Surxandaryo</option>
                        <option value="Sirdaryo">Sirdaryo</option>
                        <option value="Xorazm">Xorazm</option>
                        <option value="Qoraqalpog'iston Res">Qoraqalpog'iston Res</option>
                        <option value="Toshkeent Sh">Toshkent Sh</option>
                        <option value="Toshkent vil">Toshkent vil</option>
                    </select>
                </div>
                <div className="petition d-flex">
                    <h6 className="title">Qa'bul imtihonlarida qatnashish uchun Arizani qoldiring:</h6>
                        <div className="upload-file">
                            <button className="upload-btn">Fayl yuklash</button>
                            <input type="file" onChange={handleChange} className="input" />
                        </div>
                        <img src={petition} className="image-upload"/>
                </div>
                <div className="d-flex margin">
                    <button onClick={handleClick}>Ariza na'munasini yuklab olish</button>
                </div>
                <div className="passport d-flex">
                    <h6 className="title">Pasport yoki guvohnamangiz rasmini yuklang:</h6>
                    <div className="upload-file">
                        <button className="upload-btn">Fayl yuklash</button>
                        <input type="file" onChange={handleChangeTwo} className="input"/>
                    </div>
                        <img src={passport} className="image-upload" />
                </div>
                <div className="medical d-flex">
                    <h6 className="title">086 shaklidagi tibbiy varaqa rasmini yuklang:</h6>
                    <div className="upload-file">
                        <button className="upload-btn">Fayl yuklash</button>
                        <input type="file" onChange={handleChangeTree} className="input"/>
                    </div>
                        <img src={medical} className="image-upload" />
                </div>
                <div className="medical d-flex">
                    <h6 className="title">063 shaklidagi tibbiy varaqa rasmini yuklang:</h6>
                    <div className="upload-file">
                        <button className="upload-btn">Fayl yuklash</button>
                        <input type="file" onChange={handleChangeFour} className="input"/>
                    </div>
                        <img src={doctor} className="image-upload" />
                </div>
                <div className="picture d-flex">
                    <h6 className="title">3.5 x 4.5 o'lcahmdagi rasmi yuklang:</h6>
                    <div className="upload-file">
                        <button className="upload-btn">Fayl yuklash</button>    
                        <input type="file" onChange={handleChangeFive} className="input"/>
                    </div>
                        <img src={picture} className="image-upload" />
                </div>
                <div className="phone-number d-flex">
                    <h6 className="title">Telefon raqam:</h6>
                    <input type="tel" id="phone-number" name="phone-number" maxLength={9}/>
                </div>
                <button className="submit">Yuborish</button>
            </div>
        </div>
    )
}