let clientes = [];

function renderClientes(data) {
  const tbody = document.getElementById("clientesTableBody");

  if (!data.length) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6">No se han encontrado resultados.</td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = data.map(cliente => `
    <tr>
      <td>${cliente.id}</td>
      <td>${cliente.nombre}</td>
      <td>${cliente.email}</td>
      <td>${cliente.empresa}</td>
      <td>${cliente.ciudad}</td>
      <td>
        <span class="status-badge ${cliente.estado === "Activo" ? "status-activo" : "status-pendiente"}">
          ${cliente.estado}
        </span>
      </td>
    </tr>
  `).join("");
}

function filterClientes(value) {
  const term = value.toLowerCase();

  const filtered = clientes.filter(cliente =>
    cliente.nombre.toLowerCase().includes(term) ||
    cliente.email.toLowerCase().includes(term) ||
    cliente.empresa.toLowerCase().includes(term) ||
    cliente.ciudad.toLowerCase().includes(term)
  );

  renderClientes(filtered);
}

async function loadClientes() {
  try {
    const response = await fetch("clientes.json");
    const data = await response.json();

    clientes = data;

    document.getElementById("totalClientes").textContent = data.length;
    document.getElementById("lastUpdate").textContent = new Date().toLocaleString("es-ES");

    renderClientes(data);
  } catch (error) {
    document.getElementById("clientesTableBody").innerHTML = `
      <tr>
        <td colspan="6">Error cargando la base de datos de clientes.</td>
      </tr>
    `;
  }
}

document.getElementById("searchInput").addEventListener("input", (e) => {
  filterClientes(e.target.value);
});

loadClientes();
