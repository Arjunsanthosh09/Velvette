function openMaterialPopup(element) {
    const popup = document.getElementById('materialPopup');
    const popupImg = document.getElementById('materialPopupImage');
    const popupDetails = document.getElementById('materialPopupDetails');
    const img = element.querySelector('img');
    const content = element.querySelector('.popup-content');

    popupImg.src = img.src;
    popupDetails.innerHTML = content.innerHTML;
    
    // Add click event listener to the buy now button
    const buyButton = popupDetails.querySelector('.buy');
    const heightInput = popupDetails.querySelector('#height');
    const widthInput = popupDetails.querySelector('#width');
    
    if (buyButton) {
        buyButton.addEventListener('click', function() {
            const materialName = content.querySelector('h3').textContent;
            const pricePerMeter = content.querySelector('.price').textContent;
            const materialDesc = content.querySelector('.description').textContent;
            const height = heightInput ? heightInput.value : '1';
            const width = widthInput ? widthInput.value : '1';
            
            // Calculate total area
            const totalArea = (parseFloat(height) * parseFloat(width)).toFixed(2);
            
            // Create WhatsApp message
            const message = `Hi, I'm interested in purchasing:\n\n` +
                `Material: ${materialName}\n` +
                `Price: ${pricePerMeter}\n` +
                `Dimensions Required:\n` +
                `- Height: ${height} meters\n` +
                `- Width: ${width} meters\n` +
                `Total Area: ${totalArea} square meters\n` +
                `Description: ${materialDesc}\n\n` +
                `Please provide more details about this material.`;
            
            // Create WhatsApp URL with the message
            const whatsappUrl = `https://wa.me/918590939674?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    }
    
    popup.style.display = 'flex';
}

function closeMaterialPopup() {
    const popup = document.getElementById('materialPopup');
    popup.style.display = 'none';
}