const video = document.getElementById('camera');
const canvas = document.getElementById('canvas');
const snapButton = document.getElementById('snap-button');
const photoContainer = document.getElementById('photo-container');

// Access the user's webcam
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(err => {
        console.error('Error accessing camera: ', err);
    });

snapButton.addEventListener('click', () => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    const dataUrl = canvas.toDataURL('image/png');
    photoContainer.innerHTML = `<h2>Snapped Photo</h2><img src="${dataUrl}" alt="Snapped Photo">`;
});