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
    background-image: url("./img/the-wall.jpg");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    padding: 50px;
}
main {
    margin: 0px auto;
    width: 1000px;
    height: 500px;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
}
    .heading, .forms {
        vertical-align: top;
        height: 100%;
        display: inline-block;
    }
    .heading {
        width: 65%;
    }
        .messages {
            height: 110px;
        }
        h2 {
            margin: 2px auto 0px 30px;
            font-weight: normal;
            font-size: 80px;
        }
        h5 {
            margin-left: 30px;
            font-size: 40px;
            font-weight: normal;
            margin-bottom: 5px;
        }
    .forms {
        width: 34.5%;
        border-radius: 20px;
        padding: 40px;
    }
    #sign_up input {
        height: 30px;
        font-size: 16px;
    }
        input {
            width: 100%;
            height: 35px;
            margin-bottom: 8px;
            font-size: 18px;
            display: inline-block;
            padding-left: 4px;
            border: none;
            border-radius: 4px;
        }
        #login {
            font-weight: 500px;
        }
        .btn {
            width: 50%;
            display: block;
            cursor: pointer;
            margin: 10px auto 30px auto;
            background-color: rgba(255, 255, 255, 0.5);
            border: none;
            border-radius: 4px;
            font-size: 18px;
            font-weight: 600;
        }
        #first_name, #last_name {
            width: 49%;
        }
        h6 {
            font-weight: normal;
            font-size: 24px;
        }
        .signup {
            margin-bottom: 20px;
        }
        .messages p {
            margin: 2px auto;
            text-align: center;
            font-size: 14px;
            width: 400px;
            font-weight: bold;
        }
        .error {
            color: red;
            background-color: rgba(255, 0, 0, 0.2);
        }
        .success {
            color: white;
            background-color: rgba(0, 255, 0, 0.2);
        }
.main-body {
    padding: 20px;
}
.main-wall {
    border-radius: 8px;
    height: 600px;
    padding: 20px;
}
    h3, a {
        display: inline-block;
        vertical-align: top;
    }
    h3 {
        font-size: 30px;
        margin-right: 75%;
    }
    a {
        text-decoration: none;
        color: white;
        text-align: end;
        font-size: 20px;
        margin: 12px 0px;
    }
    aside {
        vertical-align: top;
        display: inline-block;
        height: 90%;
    }
    .profile {
        width: 34.3%;
        padding-top: 10px;
    }
        img, .profile p {
            vertical-align: top;
            display: inline-block;
            font-weight: bold;
        }
        img {
            width: 80px;
            margin-right: 4px;
            background-color: rgba(255, 255, 255, 0.2);
            border-radius: 2px;
        }
        blockquote {
            font-size: 16px;
            margin: 30px 0px;
            font-weight: 600;
        }
        span {
            font-style: italic;
            display: block;
            text-align: end;
            margin-top: 10px;
        }
        .profile p {
            font-size: 20px;
        }
        .profile form {
            padding: 2px;
            text-align: end;
        }
        textarea {
            border-radius: 4px;
            resize: none;
            border: none;
            height: 140px;
            font-size: 14px;
            color: white;
            background-color: rgba(255, 255, 255, 0.4);
            width: 100%;
        }
        #post, .reply-btn {
            width: 20%;
            height: 30px;
            cursor: pointer;
            margin-top: 4px;
            padding: 2px 4px;
            color: white;
            background-color: rgba(255, 255, 255, 0.2);
        }
    .wall {
        width: 65%;
        padding-left: 40px;
        overflow-y: auto;
    }
        .content, .replies {
            background-color: rgba(255, 255, 255, 0.2);
            padding: 4px 8px;
            border-radius: 4px;
        }
        .post h1 {
            text-align: start;
            font-size: 18px;
        }
        .replies {
            margin: 10px 0px 5px 80px;
        }
        .replies p {
            font-size: 14px;
        }
        .reply {
            margin-left: 140px;
        }
        .reply textarea {
            height: 75px;
        }
        .reply-btn {
            margin-left: 84%;
            font-size: 16px;
            padding: 0;
            width: 60px;
        }

        /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #gray;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
