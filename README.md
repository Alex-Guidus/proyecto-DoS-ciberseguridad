Proyecto de ciberseguridad centrado en el análisis de ataques de denegación de servicio (DoS) y la implementación de medidas de mitigación en un entorno de laboratorio controlado.

En este proyecto se simula un entorno realista con:

Servidor Ubuntu con Apache
Máquina atacante Kali Linux
Aplicación web básica con datos simulados
Monitorización del sistema en tiempo real

Se analizan dos tipos de ataques:

Slowloris (capa de aplicación)
SYN Flood (capa de red)

Tecnologías utilizadas:

VirtualBox
Ubuntu Server
Kali Linux
Apache2
hping3
Slowloris
htop, ss, iftop
Wireshark

Estructura del proyecto
/Proyecto
 ├── web/
 │    ├── index.html
 │    ├── style.css
 │    ├── app.js
 │    └── clientes.json
 └── Proyecto_DoS.pdf

 Objetivo:

Analizar el impacto de ataques DoS sobre un servidor web y aplicar medidas de mitigación para mantener la disponibilidad del servicio.

Medidas de mitigación
Configuración de Apache (mod_reqtimeout)
Ajustes del kernel (sysctl)
Reglas de firewall (iptables)

Resultados

Tras aplicar las mitigaciones:

✔️ Reducción de conexiones maliciosas
✔️ Mejora del tiempo de respuesta
✔️ Mayor estabilidad del sistema

Autor

Alex Guidus

⚠️ Nota

Proyecto realizado en entorno controlado con fines educativos.
