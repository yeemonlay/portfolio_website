
const ICONS = [
    //frontend
    { name: 'HTML5', color: '#f34708', slug: 'html5' },
    { name: 'CSS3', color: '#8c09f0', slug: 'css' },
    { name: 'Tailwind CSS', color: '#61DAFB', slug: 'tailwindcss' },
    { name: 'Bootstrap', color: '#aa00d4', slug: 'bootstrap' },
    { name: 'JavaScript', color: '#e7e70e', slug: 'javascript' },
    { name: 'TypeScript', color: '#3178C6', slug: 'typescript' },
    { name: 'jQuery', color: '#3178C6', slug: 'jquery' },
    { name: 'React', color: '#61DAFB', slug: 'react' },
    //backend
    { name: 'DotNet', color: '#d20af1', slug: 'dotnet' },
    { name: 'C#', color: '#27062c', imageUrl: 'img/csharp.png' },
    //db
    { name: 'Supabase', color: '#044512', slug: 'supabase' },
    { name: 'SQLite', color: '#3256b8', slug: 'sqlite' },
    { name: 'PostgreSQL', color: '#336791', slug: 'postgresql' },
    { name: 'Redis', color: '#f45353', imageUrl: 'img/redis.png' },
    { name: 'Azure Cosmos DB', color: '#73c9fa', imageUrl: 'img/cosmos.png',width: 54, height: 54 },
    { name: 'MS SQL Server', color: '#f81616', imageUrl: 'img/mssql.png'},
    //other
    { name: 'Azure', color: '#0078D4', imageUrl: 'img/azure.png' },
    { name: 'Azure DevOps', color: '#0078D4', imageUrl: 'img/ado.png' },
    { name: 'Git', color: '#F05032', slug: 'git' },
    { name: 'GitHub', color: '#181717', slug: 'github' },
    { name: 'Bitbucket', color: '#3c0cec', slug: 'bitbucket' },
    { name: 'Docker', color: '#2496ED', slug: 'docker' },

];

function spherePoints(n) {
    const pts = [];
    const phi = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < n; i++) {
        const y = 1 - (i / (n - 1)) * 2;
        const r = Math.sqrt(1 - y * y);
        const theta = phi * i;
        pts.push([Math.cos(theta) * r, y, Math.sin(theta) * r]);
    }
    return pts;
}

function rotateY([x, y, z], a) {
    return [x * Math.cos(a) + z * Math.sin(a), y, -x * Math.sin(a) + z * Math.cos(a)];
}
function rotateX([x, y, z], a) {
    return [x, y * Math.cos(a) - z * Math.sin(a), y * Math.sin(a) + z * Math.cos(a)];
}

const container = document.getElementById("techSphere");
const basePoints = spherePoints(ICONS.length);

let angleY = 0;
let angleX = 0.3;
let velY = 0.004;
let velX = 0;

let radius = 120;

// Create elements
const elements = ICONS.map(icon => {
    const item = document.createElement("div");
    item.className = "sphere-item";

    const box = document.createElement("div");
    box.className = "sphere-icon";
    box.style.background = icon.color + "15";
    box.style.borderColor = icon.color + "35";

    const img = document.createElement("img");
    img.src = icon.imageUrl || `https://cdn.simpleicons.org/${icon.slug}`;
    img.alt = icon.name;

    box.appendChild(img);
    item.appendChild(box);
    container.appendChild(item);

    return item;
});

// Resize handling
function updateRadius() {
    const rect = container.getBoundingClientRect();
    radius = Math.min(rect.width, rect.height) * 0.38;
}
window.addEventListener("resize", updateRadius);
updateRadius();

// Animation
function animate() {
    angleY += velY;
    angleX += velX;

    basePoints.forEach(([px, py, pz], i) => {
        let [x, y, z] = rotateY([px, py, pz], angleY);
        [x, y, z] = rotateX([x, y, z], angleX);

        const depth = (z + 2) / 3;
        const el = elements[i];

        el.style.transform = `
            translate(-50%, -50%)
            translate(${x * radius}px, ${y * radius}px)
            scale(${0.5 + depth * 0.65})
        `;

        el.style.opacity = Math.max(0.2, depth);
        el.style.zIndex = Math.round(z * 100 + 100);
    });

    requestAnimationFrame(animate);
}
animate();

// Mouse interaction
container.addEventListener("mousemove", (e) => {
    const rect = container.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

    velY = dx * 0.05 + 0.004;
    velX = -dy * 0.05;
});

container.addEventListener("mouseleave", () => {
    velY = 0.004;
    velX = 0;
});
