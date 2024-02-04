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
    background-image: url("./img/leaf-bg.jpeg");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    padding: 20px 0px;
    color: rgba(255, 255, 255, 1);
}
div {
    margin: 10px auto 0px auto;
    width: 500px;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 20px;
    padding: 20px;
    text-align: center;
    text-shadow: -2px 0px 9px rgba(0,0,0,0.48);
}
    form {
        text-align: center;
    }
    #full_name {
        margin: 20px auto 0px auto;
        height: 30px;
        display: block;
        font-size: 16px;
        width: 60%;
    }
    h1 {
        font-weight: normal;
        text-align: center;2
        margin-bottom: 40px;
    }
    #csv{
        width: 46.5%;
    }
    #csv, #upload{
        margin-top: 10px;
        vertical-align: top;
        display: inline-block;
        border: 1px solid white;
        font-size: 15px;
        cursor: pointer;
    }
    #upload {
        padding: 2.5px 4px;
    }
    h5 {
        font-size: 20px;
        text-align: start;
        margin-top: 30px;
    }
    p {
        margin-top: 10px;
        text-align: start;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
#home {
    display: block;
    font-size: 20px;
    margin: 0px 0px 10px 20px;
    font-weight: bold;
}
table {
    background-color: rgba(0, 0, 0, 0.5);
    border-collapse: collapse;
}
    th, td {
        border: 1px solid white;
        padding: 2px;
    }
#links {
    height:auto;
    width: 90%;
    padding: 4px;
    background-color: rgba(0, 0, 0, 0.8);
}
    #links a, .active-link {
        font-size: 20px;
        margin: 0px 10px;
        font-weight: bold;
    }
    .active-link {
        border-bottom: 2px solid white;
    }
.status {
    margin: 0px auto;
    background: none;
    border-radius: 0px;
    height: 50px;
    padding: 0px;
}
    .status p {
        margin: 0px 0px 4px 0px;
        text-align: center;
        font-size: 16px;
    }
    .error {
        background-color: rgba(255, 0, 0, 0.4);
    }
    .success {
        background-color: rgba( 0, 255, 0, 0.4);
    }
.file {
    background: none;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
}

