const miURL = new URL(
  "https://www.tilinga.com/chiruzas/catanga?ordenar=vista&nivel=1"
);

console.log(miURL.host); // www.tilinga.com
console.log(miURL.pathname); // chiruzas/catanga
console.log(miURL.searchParams); // { 'ordenar' => 'vista', 'nivel' => '1' }
console.log(miURL.searchParams.get("ordenar")); // vista
