<svelte:head>
    <title>Contact me</title>
</svelte:head>

<h2>Contact</h2>

<form action="mailto:hchiou@mit.edu" method="GET">
    <label>
        Email:
        <input name="email" type="email" required>
    </label>    
    <label>
        Subject:
        <input name="subject" type="text" required>
    </label>    
    <label>
        Body:
        <textarea name="body" required></textarea>
    </label>

    <button type="submit">Submit</button>
</form>
