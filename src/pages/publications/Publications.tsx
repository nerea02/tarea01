import Card from "../../components/card/Card"
import "./publications.css"

const Publications = () => {
    const publications = [
        { id: 0, title: "Argentina", subtitle: "Buenos Aires", description: "País en América del Sur conocido por su diversidad cultural y paisajes impresionantes." },
        { id: 1, title: "Brasil", subtitle: "Brasilia", description: "La mayor nación de América del Sur, famosa por sus playas, selvas tropicales y el Carnaval de Río." },
        { id: 2, title: "Estados Unidos", subtitle: "Washington D.C.", description: "Potencia global con una mezcla diversa de culturas, paisajes y ciudades icónicas." },
        { id: 3, title: "Japón", subtitle: "Tokio", description: "País insular en Asia conocido por su tecnología avanzada, cultura única y exquisita gastronomía." },
        { id: 4, title: "Australia", subtitle: "Sídney", description: "Continente y país insular con impresionantes paisajes naturales y una fauna única." },
        { id: 5, title: "Francia", subtitle: "París", description: "Destino turístico icónico con una rica historia, arte, moda y deliciosa gastronomía." },
        { id: 6, title: "India", subtitle: "Nueva Delhi", description: "Subcontinente diverso conocido por su rica historia, arquitectura y tradiciones culturales." },
        { id: 7, title: "Sudáfrica", subtitle: "Ciudad del Cabo", description: "Nación africana con una asombrosa diversidad geográfica y cultural." },
        { id: 8, title: "Canadá", subtitle: "Ottawa", description: "Gran nación norteamericana con ciudades modernas, paisajes naturales impresionantes y amigable multiculturalidad." },
        { id: 9, title: "Italia", subtitle: "Roma", description: "Cuna de la civilización romana y hogar de arte, arquitectura y deliciosa cocina." }
    ];

    return (
        <div className="pubs-container">
            {publications.map((pub) => (
                <Card title={ pub.title} subtitle={pub.subtitle } description={pub.description } />
            ))}
        </div>
    )
}
export default Publications;