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
    padding-top: 50px;
}
.container {
    margin: 0px auto;
    width: 960px;
}
form.container {
    height: 80px;
}
    h1, .reset-container {
        vertical-align: top;
        display: inline-block;
    }
    h1 {
        width: 60%;
        margin: 18px 0px 18px 0px;
    }
    .reset-container {
        height: 100%;
        width: 39.4%;
        text-align: end;
    }
    #reset {
        text-align: end;
        color: white;
        background-color: #c92c2c;
        font-size: 18px;
        padding: 4px 6px;
        margin: 22px 64px 0px 0px;
    }
section {
    height: 450px;
    padding: 20px 0px;
}
    .money-form {
        text-align: center;
        height: 150px;
        width: 180px;
        border: 1px solid black;
        padding: 22px;
        vertical-align: top;
        display: inline-block;
        margin-right: 5.5%;
        margin-bottom: 40px;
    }
    h2 {
        font-size: 16px;
        margin-bottom: 15px;
    }
    .bet {
        font-size: 14px;
        background-color: #28a745;
        color: white;
        font-weight: bold;
        padding: 2px 8px;
        margin-bottom: 15px;
    }
    form p {
        font-size: 14px;
        font-weight: bold;
    }
    #status {
        border: 1px solid black;
        width: 93%;
        height: 40%;
        overflow-y: scroll;
    }
    #status p {
        font-size: 18px;
        margin-bottom: 20px;
    }
    .win {
        color: #28a745;
    }
    .loss {
        color: #c92c2c;
    }
        