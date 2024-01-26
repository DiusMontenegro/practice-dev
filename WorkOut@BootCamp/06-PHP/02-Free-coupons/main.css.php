<?php
    header('Content-type: text/css');
?>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'arial';
}
body {
    padding-top: 60px;
    text-align: center;
}
form {
    margin: 0px auto;
    border: 1px solid black;
    width: 350px;
    height: 325px;
    padding: 20px 0px;
    border-radius: 10px;
}
    h1 {
        margin-bottom: 10px;
    }
    #submit, h3 {
        margin: 20px 0px;
        display: block;
    } 
    #submit {
        text-align: center;
        margin: 20px auto 10px auto;
        padding: 4px 6px;
        font-weight: bold;
        background-color: green;
        color: white;
    }
.discount {
    background-color: #e1c262;
    margin: 20px auto;
    padding: 15px 0px;
    border: 4px dashed black;
    border-radius: 15px;
    width: 75%;
    height: 150px;
}
    h4 {
        margin-bottom: 10px;
    }
    h2 {
        font-size: 35px;
        margin-bottom: 12px;
    }
    #reset, #claim { 
        width: 100px;
        font-size: 14px;
        text-decoration: none;
        margin: 0px 10px;
        padding: 4px 6px;
        border: 1px solid black;
        color: white;
        font-weight: bold;
    }
    #reset {
        background-color: red;
    }
    #claim {
        background-color: green;
    }