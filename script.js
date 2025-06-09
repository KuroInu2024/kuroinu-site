</script>

    <script>
        // Placeholder for crypto prices - in a real app, you'd fetch this from an API
        function updatePrices() {
            const kuroPrice = (Math.random() * 0.00001 + 0.000012).toFixed(8);
            const kuroChange = (Math.random() * 10 - 5).toFixed(2); // -5% to +5%
            const shibaPrice = (Math.random() * 0.0001 + 0.0005).toFixed(6);
            const shibaChange = (Math.random() * 8 - 4).toFixed(2); // -4% to +4%

            document.getElementById('price').textContent = kuroPrice;
            document.getElementById('change').textContent = (kuroChange >= 0 ? '+' : '') + kuroChange + '%';
            document.getElementById('change').className = kuroChange >= 0 ? 'positive' : 'negative';

            document.getElementById('shibaPrice').textContent = shibaPrice;
            document.getElementById('shibaChange').textContent = (shibaChange >= 0 ? '+' : '') + shibaChange + '%';
            document.getElementById('shibaChange').className = shibaChange >= 0 ? 'positive' : 'negative';
        }

        setInterval(updatePrices, 5000); // Update every 5 seconds
        updatePrices(); // Initial call

        // Community Counter Animation
        const memberCountElement = document.getElementById('memberCount');
        let currentCount = 600000; // Starting a bit lower to show growth
        const targetCount = 700000;
        const increment = 1000; // How much to increase each step
        const intervalTime = 50; // Milliseconds between increments

        function animateCounter() {
            if (currentCount < targetCount) {
                currentCount += increment;
                if (currentCount > targetCount) {
                    currentCount = targetCount;
                }
                memberCountElement.textContent = currentCount.toLocaleString(); // Add commas for readability
                setTimeout(animateCounter, intervalTime);
            }
        }
        animateCounter(); // Start the animation

        // Submit Story Function
        function submitStory() {
            const storyText = document.getElementById('futureStory').value.trim();
            const messageElement = document.getElementById('reunionMessage');

            if (storyText.length > 10) {
                messageElement.textContent = "Thank you for sharing your vision for Kuro and Shiba! The MultiversX community appreciates your contribution to their ongoing story.";
                messageElement.style.color = 'green';
                document.getElementById('futureStory').value = ''; // Clear the textarea
            } else {
                messageElement.textContent = "Please write a bit more to help Kuro and Shiba on their next adventure!";
                messageElement.style.color = 'red';
            }
        }