document.addEventListener('DOMContentLoaded', function() {
    // Image data with your actual images
    const imageData = [
        // Landscape images
        { src: 'assets/images/landscape/IMG20240608154701 (1).jpg', category: 'landscape', alt: 'Landscape 1' },
        { src: 'assets/images/landscape/IMG20240706192726 (1).jpg', category: 'landscape', alt: 'Landscape 2' },
        { src: 'assets/images/landscape/IMG20231115152939_01.jpg', category: 'landscape', alt: 'Landscape 3' },
        { src: 'assets/images/landscape/IMG20240706190722 (1).jpg', category: 'landscape', alt: 'Landscape 4' },
        { src: 'assets/images/landscape/IMG20250601192406.jpg', category: 'landscape', alt: 'Landscape 5' },
        { src: 'assets/images/landscape/IMG_8429-01.jpg', category: 'landscape', alt: 'Landscape 6' },
        { src: 'assets/images/landscape/IMG_20250427_113833.jpg', category: 'landscape', alt: 'Landscape 7' },
        { src: 'assets/images/landscape/IMG20220711100631-01.jpg', category: 'landscape', alt: 'Landscape 8' },
        { src: 'assets/images/landscape/IMG20240927132001.jpg', category: 'landscape', alt: 'Landscape 9' },
        { src: 'assets/images/landscape/IMG20240927140713.jpg', category: 'landscape', alt: 'Landscape 10' },
        { src: 'assets/images/landscape/IMG20240706192819.jpg', category: 'landscape', alt: 'Landscape 11' },
        { src: 'assets/images/landscape/IMG20250427133224.jpg', category: 'landscape', alt: 'Landscape 12' },
        { src: 'assets/images/landscape/IMG20241003114746 (1).jpg', category: 'landscape', alt: 'Landscape 13' },
        { src: 'assets/images/landscape/IMG20241111125941 (1).jpg', category: 'landscape', alt: 'Landscape 14' },
        { src: 'assets/images/landscape/IMG20241111161503 (1).jpg', category: 'landscape', alt: 'Landscape 15' },
        { src: 'assets/images/landscape/IMG20250503203516.jpg', category: 'landscape', alt: 'Landscape 16' },
        { src: 'assets/images/landscape/IMG20250618191227 (1).jpg', category: 'landscape', alt: 'Landscape 17' },
        { src: 'assets/images/landscape/IMG20250618191310.jpg', category: 'landscape', alt: 'Landscape 18' },
        { src: 'assets/images/landscape/IMG20240912135844.jpg', category: 'landscape', alt: 'Landscape 19' },
        { src: 'assets/images/landscape/IMG20240912135637.jpg', category: 'landscape', alt: 'Landscape 20' },

        
        // Festival images
        { src: 'assets/images/festival/IMG_20250429_003829.jpg', category: 'festival', alt: 'Festival 1' },
        { src: 'assets/images/festival/IMG20240901135846.jpg', category: 'festival', alt: 'Festival 2' },
        { src: 'assets/images/festival/IMG20240914230608.jpg', category: 'festival', alt: 'Festival 3' },
        { src: 'assets/images/festival/IMG20250408184217.jpg', category: 'festival', alt: 'Festival 4' },
        { src: 'assets/images/festival/IMG20250407204103.jpg', category: 'festival', alt: 'Festival 5' },
        { src: 'assets/images/festival/IMG_20240827_16200412.jpg', category: 'festival', alt: 'Festival 6' },
        { src: 'assets/images/festival/IMG20240914225432.jpg', category: 'festival', alt: 'Festival 7' },
        { src: 'assets/images/festival/IMG20240907194132.jpg', category: 'festival', alt: 'Festival 8' },
        { src: 'assets/images/festival/IMG20250406155942.jpg', category: 'festival', alt: 'Festival 9' },
        { src: 'assets/images/festival/IMG20250330085414.jpg', category: 'festival', alt: 'Festival 10' },
        { src: 'assets/images/festival/IMG20250330091028.jpg', category: 'festival', alt: 'Festival 11' },
        { src: 'assets/images/festival/IMG20240907210043.jpg', category: 'festival', alt: 'Festival 12' },
        { src: 'assets/images/festival/IMG20240910183009.jpg', category: 'festival', alt: 'Festival 13' },
        { src: 'assets/images/festival/IMG20240616123523.jpg', category: 'festival', alt: 'Festival 14' },
        { src: 'assets/images/festival/IMG20240907205450.jpg', category: 'festival', alt: 'Festival 15' },
        { src: 'assets/images/festival/IMG20241012172650 (1) (1) (1).jpg', category: 'festival', alt: 'Festival 16' },
        { src: 'assets/images/festival/IMG20250209115730.jpg', category: 'festival', alt: 'Festival 17' },
        { src: 'assets/images/festival/IMG20250330083702.jpg', category: 'festival', alt: 'Festival 18' },
        { src: 'assets/images/festival/IMG20250408195113.jpg', category: 'festival', alt: 'Festival 19' },
        { src: 'assets/images/festival/IMG20250408195010.jpg', category: 'festival', alt: 'Festival 20' },
        
        // Product images
        { src: 'assets/images/product/IMG20231127104756-01.jpg', category: 'product', alt: 'Product 1' },
        { src: 'assets/images/product/IMG20231121111642-01.jpg', category: 'product', alt: 'Product 2' },
        { src: 'assets/images/product/IMG_9365.jpg', category: 'product', alt: 'Product 3' },
        { src: 'assets/images/product/DSC07106.jpg', category: 'product', alt: 'Product 4' },
        { src: 'assets/images/product/IMG_20231104_172836.jpg', category: 'product', alt: 'Product 5' },
        { src: 'assets/images/product/IMG_20230323_171309-01-01.jpg', category: 'product', alt: 'Product 6' },
        { src: 'assets/images/product/IMG20231127104721-01.jpg', category: 'product', alt: 'Product 7' },
        { src: 'assets/images/product/IMG20231127104652-01.jpg', category: 'product', alt: 'Product 8' },
        { src: 'assets/images/product/IMG20240109114349-01.jpg', category: 'product', alt: 'Product 9' },
        { src: 'assets/images/product/IMG20240109113457-01.jpg', category: 'product', alt: 'Product 10' },
        { src: 'assets/images/product/IMG20231112192541-01.jpg', category: 'product', alt: 'Product 11' },
        { src: 'assets/images/product/IMG_20211222_151247-01-01.jpg', category: 'product', alt: 'Product 12' },
        { src: 'assets/images/product/IMG_20210215_224933.jpg', category: 'product', alt: 'Product 13' },
        { src: 'assets/images/product/IMG_7029.jpg', category: 'product', alt: 'Product 14' },
        { src: 'assets/images/product/1617906316881-01.jpg', category: 'product', alt: 'Product 15' },
        
        // Videos
        { src: 'assets/images/videos/1.mp4', category: 'videos', alt: 'Video 1', type: 'video' },
        { src: 'assets/images/videos/2.mp4', category: 'videos', alt: 'Video 2', type: 'video' },
        
        // Client work images
        { src: 'assets/images/clients/IMG20250426155903.jpg', category: 'bites-on-wheels', alt: 'Bites on Wheels Work 1', isClientWork: true },
        { src: 'assets/images/clients/IMG20250426152311.jpg', category: 'bites-on-wheels', alt: 'Bites on Wheels Work 2', isClientWork: true },
        { src: 'assets/images/clients/IMG20250426155911.jpg', category: 'bites-on-wheels', alt: 'Bites on Wheels Work 3', isClientWork: true },
        { src: 'assets/images/clients/IMG20250426155911 (1).jpg', category: 'bites-on-wheels', alt: 'Bites on Wheels Work 4', isClientWork: true },
        { src: 'assets/images/clients/IMG20250426155836 (1).jpg', category: 'bites-on-wheels', alt: 'Bites on Wheels Work 5', isClientWork: true },
        { src: 'assets/images/clients/IMG20250426220939 (1).jpg', category: 'bites-on-wheels', alt: 'Bites on Wheels Work 6', isClientWork: true },
        { src: 'assets/images/clients/IMG20241026120227.jpg', category: 'bites-on-wheels', alt: 'Bites on Wheels Work 7', isClientWork: true },
        { src: 'assets/images/clients/IMG20250426152303 (1) (1).jpg', category: 'bites-on-wheels', alt: 'Bites on Wheels Work 8', isClientWork: true },
        { src: 'assets/images/clients/IMG20250510200741 (1).jpg', category: 'bites-on-wheels', alt: 'Bites on Wheels Work 9', isClientWork: true },
        { src: 'assets/images/clients/IMG20250426221755.jpg', category: 'bites-on-wheels', alt: 'Bites on Wheels Work 10', isClientWork: true },
        { src: 'assets/images/clients/IMG20240629211000.jpg', category: 'de-koffiestate', alt: 'De koffiEstate Work 1', isClientWork: true },
        { src: 'assets/images/clients/IMG20240629201954.jpg', category: 'de-koffiestate', alt: 'De koffiEstate Work 2', isClientWork: true },
        { src: 'assets/images/clients/IMG20240629210553.jpg', category: 'de-koffiestate', alt: 'De koffiEstate Work 3', isClientWork: true },
        { src: 'assets/images/clients/IMG20240629210920.jpg', category: 'de-koffiestate', alt: 'De koffiEstate Work 4', isClientWork: true },
        { src: 'assets/images/clients/IMG20240608133516.jpg', category: 'de-koffiestate', alt: 'De koffiEstate Work 5', isClientWork: true },
        { src: 'assets/images/clients/IMG20240608135429.jpg', category: 'de-koffiestate', alt: 'De koffiEstate Work 6', isClientWork: true },
        { src: 'assets/images/clients/IMG20240629215123.jpg', category: 'de-koffiestate', alt: 'De koffiEstate Work 7', isClientWork: true },
        { src: 'assets/images/clients/IMG20240629211159.jpg', category: 'de-koffiestate', alt: 'De koffiEstate Work 8', isClientWork: true },
        { src: 'assets/images/clients/IMG20240629220334.jpg', category: 'de-koffiestate', alt: 'De koffiEstate Work 9', isClientWork: true },
        { src: 'assets/images/clients/IMG20240629201954.jpg', category: 'de-koffiestate', alt: 'De koffiEstate Work 10', isClientWork: true },
        
        // Client cover images (larger display)
        { src: 'assets/images/clients/IMG20250426152311.jpg', category: 'bites-on-wheels', alt: 'Bites on Wheels', isCover: true },
        { src: 'assets/images/clients/IMG20240629211000 (1).jpg', category: 'de-koffiestate', alt: 'De koffiEstate', isCover: true }
    ];

    // DOM Elements
    const gallery = document.getElementById('gallery');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const clientsSection = document.getElementById('clients');
    const videosSection = document.getElementById('videos');
    const connectSection = document.getElementById('connect');
    const nameTitle = document.querySelector('.name-center');
    const videoGallery = document.querySelector('.video-gallery');

    // Initialize
    loadInitialView();

    // Set up event listeners
    setupEventListeners();

    function loadInitialView() {
        nameTitle.setAttribute('data-filter', 'all');
        loadImages('all');
        document.querySelector('.filter-btn[data-filter="landscape"]').classList.add('active');
    }

    function setupEventListeners() {
        [nameTitle, ...filterButtons].forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.dataset.filter;
                
                [nameTitle, ...filterButtons].forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Hide all sections
                clientsSection.classList.add('hidden');
                videosSection.classList.add('hidden');
                connectSection.classList.add('hidden');
                
                // Show appropriate content
                if (filter === 'clients') {
                    showClientsPage();
                } else if (filter === 'videos') {
                    showVideosPage();
                } else if (filter === 'connect') {
                    showConnectPage();
                } else {
                    gallery.style.display = 'grid';
                    loadImages(filter);
                }
            });
        });
    }

    function showClientsPage() {
        gallery.style.display = 'none';
        clientsSection.classList.remove('hidden');
        clientsSection.innerHTML = '';
        
        const clientCategories = [...new Set(imageData
            .filter(img => img.isCover)
            .map(img => img.category)
        )];
        
        clientCategories.forEach(category => {
            const clientData = imageData.find(img => img.isCover && img.category === category);
            
            const clientDiv = document.createElement('div');
            clientDiv.className = 'client';
            
            const title = document.createElement('h2');
            title.className = 'client-name';
            title.textContent = clientData.alt;
            
            const img = document.createElement('img');
            img.src = clientData.src;
            img.alt = clientData.alt;
            
            const btn = document.createElement('button');
            btn.className = 'client-btn';
            btn.textContent = 'View Work';
            btn.addEventListener('click', () => {
                loadImages(category);
                gallery.style.display = 'grid';
                clientsSection.classList.add('hidden');
                
                [nameTitle, ...filterButtons].forEach(btn => btn.classList.remove('active'));
                document.querySelector(`.filter-btn[data-filter="${category}"]`)?.classList.add('active');
            });
            
            clientDiv.appendChild(title);
            clientDiv.appendChild(img);
            clientDiv.appendChild(btn);
            clientsSection.appendChild(clientDiv);
        });
    }

    function showVideosPage() {
        gallery.style.display = 'none';
        videosSection.classList.remove('hidden');
        videoGallery.innerHTML = '';
        
        const filteredVideos = imageData.filter(img => img.category === 'videos');
        filteredVideos.forEach(item => {
            const videoItem = document.createElement('div');
            videoItem.className = 'gallery-item';
            
            const video = document.createElement('video');
            video.src = item.src;
            video.alt = item.alt;
            video.setAttribute('loop', '');
            video.setAttribute('muted', '');
            video.setAttribute('autoplay', '');
            videoItem.appendChild(video);
            
            videoGallery.appendChild(videoItem);
        });
    }

    function showConnectPage() {
        gallery.style.display = 'none';
        connectSection.classList.remove('hidden');
    }

    // Modify your loadImages function like this:
    function loadImages(filter) {
        gallery.innerHTML = '';
        
        let filteredImages;
        
        if (filter === 'all') {
            // For homepage: Show only a limited selection (first few of each category)
            filteredImages = [
                // Show first 2 landscape images
                ...imageData.filter(img => img.category === 'landscape').slice(0, 5),
                // Show first 2 festival images
                ...imageData.filter(img => img.category === 'festival').slice(0, 5),
                // Show first 2 product images
                ...imageData.filter(img => img.category === 'product').slice(0, 5)
            ];
        } else {
            // For category pages: Show ALL images of that category
            filteredImages = imageData.filter(img => img.category === filter);
        }
        
        // Rest of your existing loadImages code...
        filteredImages.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            
            if (item.type === 'video') {
                const video = document.createElement('video');
                video.src = item.src;
                video.alt = item.alt;
                video.setAttribute('loop', '');
                video.setAttribute('muted', '');
                video.setAttribute('autoplay', '');
                galleryItem.appendChild(video);
            } else {
                const img = document.createElement('img');
                img.src = item.src;
                img.alt = item.alt;
                galleryItem.appendChild(img);
            }
            
            gallery.appendChild(galleryItem);
        });
    }
});
