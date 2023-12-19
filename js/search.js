var dropdown = document.getElementById('searchDropdown');
// Define a map with product names as keys and image URLs as values
var productImageMap = {
   'Battlefield 2042': 'https://m.media-amazon.com/images/I/71E1fInfAgS._AC_UF1000,1000_QL80_.jpg',
   'Ready or Not': 'https://i.pinimg.com/736x/22/63/e8/2263e8c76acc03f110c7b8accaa1595d.jpg',
   'Red Dead Redemption II': 'https://static.printler.com/cache/a/c/1/3/e/3/ac13e34b7a08fadd120e42243b80167d35c0a65f.jpg',
   'Street Fighter 6: Ultimate Edition':'https://pbs.twimg.com/media/FUgPIkWXoAASe3Y.jpg:large',
   'Attack on Titan 2: Final Battle': 'https://myhotposters.com/cdn/shop/products/mL3337_1024x1024.jpg?v=1571445712',
   'Dark Souls 3': 'https://m.media-amazon.com/images/M/MV5BNzE4NDBjMGEtODkwNC00NzBjLWI2ZGYtNmE1NmY5Y2Y4MmIwXkEyXkFqcGdeQXVyNTM0MjE5NTc@._V1_.jpg',
   'Assassin\'s Creed Mirage':'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61wgujVHwNL._AC_UF894,1000_QL80_.jpg',
   'Crusader King III':'https://m.media-amazon.com/images/M/MV5BODQyMzQyNjktMjQ0MS00NGRkLTllODItOWNiMWFmMTcwZjQ2XkEyXkFqcGdeQXVyMTk5NDI0MA@@._V1_.jpg',
   'Stranded: Alien Dawn':'https://www.metacritic.com/a/img/catalog/provider/6/12/6-1-927501-52.jpg',
   'Alan Wake 2':'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0a52eefd-6738-4aa9-a3f9-e54269465122/dfz9wbd-f4e39441-a2ee-47a6-9c74-95add47ae388.png/v1/fill/w_1280,h_1722,q_80,strp/alan_wake_2_poster_by_nazmussshakib3_dfz9wbd-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcyMiIsInBhdGgiOiJcL2ZcLzBhNTJlZWZkLTY3MzgtNGFhOS1hM2Y5LWU1NDI2OTQ2NTEyMlwvZGZ6OXdiZC1mNGUzOTQ0MS1hMmVlLTQ3YTYtOWM3NC05NWFkZDQ3YWUzODgucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ndLR4yqfRO2xNMhkws2DfF9gkb7SxPdPXGoGOwDrquw',
   'Diablo IV':'https://m.media-amazon.com/images/I/61ifQoGHrQL._AC_UF894,1000_QL80_.jpg',
   'Resident Evil 4':'https://i.redd.it/after-a-lot-of-work-my-re4-poster-is-finally-ready-v0-f0qcjb2uom0b1.jpg?s=29f68fc9cfed82f5daa1b54187923484197af1af',
   'Dead Space':'https://preview.redd.it/these-earlier-dead-space-remake-posters-look-awesome-the-v0-ivj2dxe529pb1.jpg?width=640&crop=smart&auto=webp&s=fec2d43cfa2e0085ff6187bf5152b212fad4fdad',
   'Dishonored 2':'https://m.media-amazon.com/images/M/MV5BZDg1MzE2YmUtNDM3Yy00ODYyLWEzZDAtMzI1ZmYyNjc4NDFlXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_FMjpg_UX1000_.jpg',
   'Elden Ring':'https://cdn.europosters.eu/image/750/posters/elden-ring-the-tarnished-one-i129583.jpg',
   'Wo Long: Fallen Dynasty': 'https://image.api.playstation.com/vulcan/ap/rnd/202210/2609/qRntDn4UD9dyoGcfVJdQfIWQ.png',
   'Genshin Impact':'https://www.ubuy.vn/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY28uaW4vNjM1MjM4NDM1ZGM3NjIwOTRjMjE4MDkzLWdlbnNoaW4taW1wYWN0LXBvc3Rlci1nYW1pbmctcG9zdGVyLmpwZw.jpg',
   'Sky: Children of the Light':'https://salt.tikicdn.com/cache/w1200/ts/product/9a/48/ef/0372252657e44b3ea84288f98ed4aa40.jpg',
   'Among Us':'https://image.api.playstation.com/vulcan/img/rnd/202107/0115/D5IIJwm65MLMPENwWzzO7rjd.png',
   'Call of Duty Mobile':'https://myhotposters.com/cdn/shop/products/mL3656_1024x1024.jpg?v=1571445734',
   'Wild Rift':'https://pbs.twimg.com/media/Ew3gYfJWYAM4GcU?format=jpg&name=4096x4096',
   'Marvel Snap':'https://s3.us-east-2.amazonaws.com/gmag.io-live-us/games/logos/46_643812111dd7b.jpg',
   'Diablo Immortal':'https://myhotposters.com/cdn/shop/products/mL6196_1024x1024.jpg?v=1655896313',
   'Raid: Shadow Legends':'https://assets-prd.ignimgs.com/2022/11/30/raid-shadow-legends-button-1-1669836166576.jpg',
   'Subway Surfers':'https://m.media-amazon.com/images/M/MV5BMzllN2IwYzEtODZhNC00ODRkLWE2ZmUtODdiOTU2YjZlZTk0XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_UY1200_CR85,0,630,1200_AL_.jpg',
   'Clash Of Clans':'https://i.pinimg.com/originals/0a/cb/c4/0acbc413eb753c9229e643a5984c0846.jpg',
   'Honkai Impact 3':'https://m.media-amazon.com/images/M/MV5BYmRiYjkzZTMtNDU5ZS00OWI4LWE2M2ItZTliZGZhMDY1MTlkXkEyXkFqcGdeQXVyMTAxNTY1Nzg1._V1_.jpg',
   'Arena Of Valor':'https://www.arenaofvalor.com/act/aovcomic/c5/AOV_005_000.jpg',
   'Demon\'s Souls':'https://m.media-amazon.com/images/M/MV5BNWFmMzA2OTgtMTZjZi00ZDY1LTkwOWEtMTFhYTNkMGMyODZmXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg',
   'Assassin\'s Creed: Valhalla':'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71dWZGPHwvL.jpg',
   'Spider-Man: Miles Morales':'https://m.media-amazon.com/images/I/81mIOWohO1L.jpg',
   'Mortal Kombat 11':'https://i.redd.it/c86na6yp47661.jpg',
   'Ghost of Tsushima: Director\'s Cut':'https://m.media-amazon.com/images/M/MV5BMjEwYjRjZjctNWRmNy00NDA1LWE1MjYtYTlhMWIzZGNhMWYxXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg',
   'Devil May Cry 5: Special Edition':'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/221b3d15-7580-45da-ac15-6b6fdaa09b0c/dda5wvu-e3480099-6cf4-48b6-9758-6bee67f9bd3e.jpg/v1/fill/w_1280,h_1811,q_75,strp/devil_may_cry_5_poster_by_samdenmarkart_dda5wvu-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgxMSIsInBhdGgiOiJcL2ZcLzIyMWIzZDE1LTc1ODAtNDVkYS1hYzE1LTZiNmZkYWEwOWIwY1wvZGRhNXd2dS1lMzQ4MDA5OS02Y2Y0LTQ4YjYtOTc1OC02YmVlNjdmOWJkM2UuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Q5VWaPtZets3tN6QPGPZ0HV4sXTv3BIPVwgRY_Q_Ro4',
   'Marvel\'s Spider-Man 2':'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91CMdZKGC8L._AC_UF894,1000_QL80_.jpg',
   'God of War: Ragnarok':'https://pbs.twimg.com/media/FeD319xWYAAW_KP?format=jpg&name=4096x4096',
   'The Last Of Us: Part II':'https://cdn.europosters.eu/image/1300/posters/the-last-of-us-2-ellie-i76718.jpg',
   'Dragonball Z Kakarot':'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/ddmjtzo-9853b5c7-364d-4bd6-a140-bda852938346.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGRtanR6by05ODUzYjVjNy0zNjRkLTRiZDYtYTE0MC1iZGE4NTI5MzgzNDYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.eh_wU6rQRFUQ3bfJbqyUwuOEUVJWcnvGOqHsHk7F-NI',
   'Resident Evil 3 Remake':'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0cbb3719-1cbf-4b01-bba8-925b67cd892a/df15cgl-303c0351-bbac-490e-9f26-0b8244edadca.png/v1/fill/w_1280,h_1808,q_80,strp/resident_evil_3_remake_poster_by_jokerxax316_df15cgl-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgwOCIsInBhdGgiOiJcL2ZcLzBjYmIzNzE5LTFjYmYtNGIwMS1iYmE4LTkyNWI2N2NkODkyYVwvZGYxNWNnbC0zMDNjMDM1MS1iYmFjLTQ5MGUtOWYyNi0wYjgyNDRlZGFkY2EucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.70kR-cGrbnGXgk2vjKPqAfTBWWsc9LKFfXtGejC9_XU',
   'Death Stranding':'https://i.ebayimg.com/images/g/QpoAAOSwxY9dgNqJ/s-l1200.webp',
};
// Your modified getImageUrl function
function getImageUrl(productName) {
    // Check if the product name exists in the map
    if (productName in productImageMap) {
        // Return the corresponding image URL
        return productImageMap[productName];
    } else {
        console.log(`Image URL not found for ${productName}`);
        // Return a default or error image URL if necessary
        return 'https://static.thenounproject.com/png/504708-200.png';
    }
}
function showDropdown() {
   var input = document.getElementById('searchbar');
   dropdown.innerHTML = '';
   
   // Simulated search results (replace with your actual data)
   var searchResults = [
      'Battlefield 2042', 'Ready or Not', 'Red Dead Redemption II', 'Street Fighter 6: Ultimate Edition', 'Attack on Titan 2: Final Battle', 'Dark Souls 3', 'Assassin\'s Creed Mirage',
      'Crusader King III', 'Stranded: Alien Dawn', 'Alan Wake 2', 'Diablo IV', 'Resident Evil 4', 'Dead Space', 'Dishonored 2', 'Elden Ring', 'Wo Long: Fallen Dynasty',
      'Genshin Impact', 'Sky: Children of the Light', 'Among Us', 'Call of Duty Mobile', 'Wild Rift', 'Marvel Snap', 'Diablo Immortal', 'Raid: Shadow Legends',
      'Subway Surfers', 'Clash Of Clans', 'Honkai Impact 3', 'Arena Of Valor', 'Demon\'s Souls', 'Assassin\'s Creed: Valhalla', 'Spider-Man: Miles Morales', 'Mortal Kombat 11',
      'Ghost of Tsushima: Director\'s Cut', 'Devil May Cry 5: Special Edition', 'Marvel\'s Spider-Man 2', 'God of War: Ragnarok', 'The Last Of Us: Part II',
      'Dragonball Z Kakarot', 'Resident Evil 3 Remake', 'Death Stranding'
   ];

   searchResults.forEach(function (result) {
    if (result.toLowerCase().includes(input.value.toLowerCase())) {
        var link = document.createElement('a');
        var imageUrl = getImageUrl(result);

        link.href = `item.html?itemName=${encodeURIComponent(result)}&itemImage=${encodeURIComponent(imageUrl)}`;
        link.textContent = result;
        link.onclick = function (event) {
            event.preventDefault();
            input.value = result;
            dropdown.style.display = 'none';
            window.location.href = link.href;
        };

        dropdown.appendChild(link);
    }
});

   if (input.value.length > 0 && dropdown.children.length > 0) {
      dropdown.style.display = 'block';
   } else {
      dropdown.style.display = 'none';
   }
}

console.log(Object.keys(productImageMap));
console.log(searchResults);