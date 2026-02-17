export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/blocked/", "/formulario/", "/sucesso/"],
            },
        ],
        sitemap: "https://brunoduartepersonal.com.br/sitemap.xml",
    };
}
