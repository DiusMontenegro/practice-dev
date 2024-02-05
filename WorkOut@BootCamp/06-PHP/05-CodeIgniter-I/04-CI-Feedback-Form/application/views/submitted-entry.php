    <div class="container">
        <h1>Submitted Entry</h1>
        <div class="values">
            <div>
                <h4>Your Name (optional):</h4>
                <h4>Course Title:</h4>
                <h4>Given Score (1-10):</h4>
            </div>
            <div>
                <h4><?= $feedback['first_name']?></h4>
                <h4><?= $feedback['course']?></h4>
                <h4><?= $feedback['score']?></h4>
            </div>
        </div>
        <p>Reason:</p>
        <p id="description"><?= $feedback['feedback']?></p>
        <a href="./">Return</a>
    </div>
