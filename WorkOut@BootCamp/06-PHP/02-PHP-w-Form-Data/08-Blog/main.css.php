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
    background-image: url("./img/escalade.png");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}
.container {
    width: 1000px;
    margin: 0px auto;
    height: 100%;
}
header {
    width: 100%;
    height: 100vh;
}
nav {
    height: 60px;
    background-color: rgba(0, 0, 0, 0.5);
    position: sticky;
    top: 0;
    color: #f7f7f7;
}
    h1, p, a{
        vertical-align: top;
        display: inline-block;
        margin: 12px 0px;
    }
    h1 {
        margin-right: 60%;
    }
    nav p, nav a {
        font-size: 20px;
        margin: 14px 0px;
    }
    nav p {
        margin-right: 4%;
    }
    a {
        text-decoration: none;
        color: #f7f7f7;
    }
main {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
}
    main .container {
        padding: 40px;
    }
    .content {
        display: inline-block;
        vertical-align: top;
        width: 57%;
        font-size: 18px;
        height: 100%;
        padding: 0px 10px;
    }
    .content h1 {
        font-size: 30px;
        width: 100%;
    }
    .content p {
        font-size: 16px;
        width: 100%;
    }
    img {
        margin: 0px 0px;
        width: 390px;
    }
    .content p, img {
        margin-bottom: 100px;
    }
    #comments {
        background-color: rgba(255, 255, 255, 0.2);
        padding: 20px 40px;
        border-radius: 10px;
    }
    .details {
        margin-top: 8px;
    }
    .replies {
        margin-bottom: 20px;
    }
    .replies, textarea {
        width: 90%;
        display: inline-block;
        margin-left: 80px;
    }
    .reply {
        font-size: 14px;
        margin-top: 6px;
    }
    .replies textarea {
        margin-left: 0;
        width: 100%;
        resize: none;
        height: 50px;
        border-radius: 4px;
    }
    .reply-form {
        text-align: end;
    }
    .reply-btn {
        display: inline-block;
        vertical-align: top;
        padding: 4px 6px;
        cursor: pointer;
    }
    h2 {
        text-align: start;
        margin: 0px 0px 10px 0px
    }
    #review {
        text-align: right;
    }
    #review-input {
        resize: none;
        width: 100%;
        height: 80px;
        margin: 0px 0px 10px 0px;
        border-radius: 4px;
    }
    #review-btn {
        margin: 0px 0px 40px 0px;
        cursor: pointer;
        padding: 4px 6px;
        font-size: 14px;
        font-weight: bold;
    }
    .error {
        color: red;
    }
