<?php
    header('Content-type: text/css');
?>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'arial';
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
body {
    background-color: #7ED7C1;
    color: #83A2FF;
}
#entry {

}
#entry-form {
    width: 500px;
    margin: 20px auto 0px auto;
    background-color: #F0DBAF;
    border-radius: 20px;
    padding: 40px;
    font-size: 20px;
    -webkit-box-shadow: 1px 0px 27px 1px rgba(0,0,0,0.52);
    -moz-box-shadow: 1px 0px 27px 1px rgba(0,0,0,0.52);
    box-shadow: 1px 0px 27px 1px rgba(0,0,0,0.52);
    text-align: end;
    position: relative;
}
    h1 {
        text-align: center;
        margin-bottom: 30px;
    }
    label, input {
        display: block;
        width: 60%;
        text-align: start;
        margin-bottom: 10px;
    }
    label {
        font-size: 22px;
    }
    input {
        font-size: 18px;
        height: 30px;
        background-color: #EEEDEB;
        border: 1px solid #83A2FF;
        border-radius: 4px;
        color: #83A2FF;
    }
    #details-input {
        border-radius: 4px;
        border: 1px solid #83A2FF;
        font-size: 16px;
        resize: none;
        width: 100%;
        color: #83A2FF;
        height: 140px;
        overflow-y: scroll;
        text-align: start;
        background-color: #EEEDEB;
    }
    #skip, #add {
        vertical-align: top;
        display: inline-block;
        width: 20%;
        height: 40px;
        position-right: 0;
        text-align: center;
        margin-top: 35px;
        color: #EEEDEB;
        cursor: pointer;
        padding: 4px 6px;
        background-color: #7ED7C1;
        border-radius: 10px;
        -webkit-box-shadow: 3px 3px 31px -4px rgba(0,0,0,0.75);
        -moz-box-shadow: 3px 3px 31px -4px rgba(0,0,0,0.75);
        box-shadow: 3px 3px 31px -4px rgba(0,0,0,0.75);
    }
    form img {
        position: absolute;
        width: 140px;
        top: 90px;
        right: 50px;
    }
    h4 {
        margin: 20px auto 10px auto;
        text-align: center;
        font-size: 18px;
        width: 600px;
        background-color: rgba(255, 0, 0, 0.5);
        color: white;
        padding: 4px 0px;
    }
#bulletin-board {
    padding: 20px;
}
.container {
    margin: 0px auto;
    width: 1000px;
    border: 1px solid #F0DBAF;
    background-color: #F0DBAF;
    border-radius: 6px;
    padding: 0px 40px 20px 40px;
    position: relative;
    -webkit-box-shadow: 3px 3px 31px -4px rgba(0,0,0,0.75);
    -moz-box-shadow: 3px 3px 31px -4px rgba(0,0,0,0.75);
    box-shadow: 3px 3px 31px -4px rgba(0,0,0,0.75);
}
    .container img {
        position: absolute;
    }
    #palm-leaves {
        width: 12%;
        top: -0.3%;
        left: -0.2%;
    }
    #beach {
        right: -1.4%;
        bottom: -2.5%;
        height: 200px;
        width: 20%;
    }
    h2 {
        font-size: 40px;
        text-align: center;
        margin: 30px 0px;
    }
    #announcements {
        width: 100%;
        height: 400px;
        border: 1px solid #83A2FF;
        background-color: #FFE3BB;
        border-radius: 10px;
        overflow-y: scroll;
        margin-bottom: 20px;
        padding: 10px;
    }
    #announcements div {
        position: relative;
    }
        #pin {
            width: 50px;
            bottom: 20%;
            right: 0px;
        }
    #bulletin-board form {
        text-align: center;
    }
    #add-new {
        font-size: 24px;
        padding:4px 8px;
        font-weight: bold;
        color: #FFE3BB;
        background-color: #83A2FF;
        border-radius: 4px;
        border: none;
        cursor: pointer;
    }
    #announcements div {
        margin: 10px 0px 20px 0px;
        border-bottom: 3px double #83A2FF;
    }
        h3 {
            font-size: 20px;
            width: 97%;
        }
        p {
            font-size: 18px;
            width: 97%;
            padding-bottom: 10px;
        }
