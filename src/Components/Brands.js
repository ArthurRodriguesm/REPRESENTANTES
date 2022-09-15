export default function Brands() {
  const brands = [
    {
      name: "Roca",
      representative: "Guilherme"
    },
    {
      name: "Deca",
      representative: "Nívia"
    },
    {
      name: "Eliane",
      representative: "Eduardo"
    },
    {
      name: "Decortiles",
      representative: "Eduardo"
    },
    {
      name: "Struffaldi",
      representative: "Carlos Viana"
    }
  ];

  return (
    <select name="marcas">
      {brands.map((value, index) => {
        return (
          <option key={index} value={value.name}>
            {value.name}
          </option>
        );
      })}
    </select>
  );
}
