// ============================================
// VADAPAAV - Menu Page Script
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    
    // === Category Filtering ===
    const tabs = document.querySelectorAll('.cat-tab');
    const items = document.querySelectorAll('.menu-item');
    const menuGrid = document.getElementById('menuGrid');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');

            const filter = tab.dataset.category;

            // Optional: add a tiny fade-out effect before filtering
            menuGrid.style.opacity = '0.5';
            
            setTimeout(() => {
                items.forEach(item => {
                    if (filter === 'all') {
                        item.classList.remove('hidden');
                        // Reset animation for newly shown items
                        item.classList.remove('visible');
                        setTimeout(() => item.classList.add('visible'), 50);
                    } else {
                        if (item.dataset.category === filter) {
                            item.classList.remove('hidden');
                            item.classList.remove('visible');
                            setTimeout(() => item.classList.add('visible'), 50);
                        } else {
                            item.classList.add('hidden');
                        }
                    }
                });
                menuGrid.style.opacity = '1';
            }, 150);
        });
    });

    // === Add to Cart Animation & Toast ===
    const addBtns = document.querySelectorAll('.add-btn');
    const toast = document.getElementById('toast');
    let toastTimeout;

    addBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Get item name
            const card = e.target.closest('.menu-item');
            const itemName = card.querySelector('.item-name').innerText;
            
            // Visual feedback on button
            btn.innerHTML = '✓';
            btn.classList.add('added');
            
            // Show toast
            const toastText = toast.querySelector('.toast-text');
            toastText.textContent = `${itemName} added!`;
            
            toast.classList.add('show');
            
            // Reset after delay
            clearTimeout(toastTimeout);
            toastTimeout = setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);

            setTimeout(() => {
                btn.innerHTML = '+';
                btn.classList.remove('added');
            }, 2000);
        });
    });

    // Make sure initial stagger animation plays for visible items
    setTimeout(() => {
        items.forEach(item => {
            if(!item.classList.contains('hidden')) {
                item.classList.add('visible');
            }
        });
    }, 100);

});
