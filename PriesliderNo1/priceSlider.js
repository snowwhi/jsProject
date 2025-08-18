  const minRange = document.getElementById('min-range');
        const maxRange = document.getElementById('max-range');
        const minPrice = document.getElementById('min-price');
        const maxPrice = document.getElementById('max-price');
        const range = document.querySelector('.slider-range');

        // Input/Range sync functionality
        minPrice.addEventListener('input', function(e) {
            minRange.value = e.target.value.replace(/\D/g, '');
            updateValues();
        });

        maxPrice.addEventListener('input', function(e) {
            maxRange.value = e.target.value.replace(/\D/g, '');
            updateValues();
        });

        // Default values
        let minVal = parseInt(minRange.value);
        let maxVal = parseInt(maxRange.value);

        function updateValues() {
            minVal = parseInt(minRange.value);
            maxVal = parseInt(maxRange.value);
            
            // Don't allow min to exceed max and vice versa
            if (minVal > maxVal) {
                minRange.value = maxVal;
                minVal = maxVal;
            }
            
            if (maxVal < minVal) {
                maxRange.value = minVal;
                maxVal = minVal;
            }
            
            // Update price displays (remove $ for editing)
            minPrice.value = minVal;
            maxPrice.value = maxVal;
            
            // Update range styling
            range.style.left = (minVal / maxRange.max * 100) + '%';
            range.style.right = ((maxRange.max - maxVal) / maxRange.max * 100) + '%';
        }

        // Initialize
        updateValues();

        // Add event listeners
        minRange.addEventListener('input', updateValues);
        maxRange.addEventListener('input', updateValues);

        document.querySelector('.apply-btn').addEventListener('click', function() {
            alert(`Price range applied: $${minVal} - $${maxVal}`);
        });