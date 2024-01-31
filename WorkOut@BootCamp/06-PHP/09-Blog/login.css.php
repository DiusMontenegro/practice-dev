<?php
    header('Content-type: text/css');
?>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'arial';
    font-family: Arial, Helvetica, sans-serif;
}
body {
    background-image: url('./img/escalade-red.png');
    background-size: cover;
    padding: 50px;
}
main {
    margin: 0px auto;
    width: 1000px;
    height: 500px;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #f7f7f7;
    padding: 20px;
}
    aside {
        width: 49.74%;
        display: inline-block;
        vertical-align: top;
        height: 100%;
    }
    #messages {
        padding: 10px;
        height: 120px;
    }
    #messages p {
        text-align: center;
        margin-bottom: 5px;
    }
    h1 {
        font-size: 45px;
        margin-bottom: 10px;
    }
    h4 {
        font-size: 25px;
        margin-bottom: 5px;
    }
#forms {
    padding: 20px 80px;
    text-align: center;
}
    form {
        width: 100%;
    }
    input {
        width: 100%;
        height: 30px;
        margin-bottom: 10px;
        font-size: 16px;
        padding-left: 4px;
        background-color: rgba(255, 255, 255, 0.8);
        border: none;
    }
    #login {
        margin-top: 10px;
        width: 40%;
        font-weight: bold;
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.5);
        border: none;
        border-radius: 4px;
        color: #f7f7f7;
    }
    a {
        display: block;
        text-decoration: none;
        color: white;
        font-weight: bold;
        margin-top: 10px;
    }
    h2 {
        margin: 40px 0px 10px 0px;
        text-align: start;
        font-size: 20px;
    }
    #register-form input {
        display: inline-block;
        width: 49.2%;
        font-size: 14px;
    }
    #register-form #email,
    #register-form #password {
        width: 100%;
    }
