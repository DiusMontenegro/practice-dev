<?php
    header('Content-type: text/css');
?>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'arial';
}
form {
    width: 350px;
    margin: 10px auto 0px auto;
    border: 1px solid black;
    padding: 20px;
    border-radius: 20px;
}
    h1 {
        text-align: center;
        margin-bottom: 30px;
    }
    label, input, textarea {
        display: block;
        font-size: 14px ;
        margin-bottom: 4px;
    }
    input {
        width: 70%;
    }
    #issue_details {
        width: fixed;
        width: 100%;
        height: 80px;
        overflow-y: scroll;
    }
    #submit {
        width: 80px;
        padding: 4px 6px;
        background-color: #4caf50;
        font-weight: bold;
        color: white;
        margin-top: 10px;
    }
    p {
        text-align: center;
        margin: 10px auto 0px auto;
        background-color: #df6161;
        width: 400px ;
        color: #efefef;
        font-size: 14px;
        padding: 2px;
        font-weight: bold;
    }
    h5 {
        margin: 10px auto 0px auto;
        width: 500px;
        padding: 10px;
        background-color: #5abb5a;
        color: white;
        font-weight: bold;
    }