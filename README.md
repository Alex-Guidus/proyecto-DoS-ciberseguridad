Proyecto de ciberseguridad centrado en el análisis de ataques de denegación de servicio (DoS) y la implementación de medidas de mitigación en un entorno de laboratorio controlado.

En este proyecto se simula un entorno realista con:

Servidor Ubuntu con Apache
Máquina atacante Kali Linux
Aplicación web básica con datos simulados
Monitorización del sistema en tiempo real
![Topología](topologia.png)

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
![Web funcionando](web.png)

Estructura del proyecto
``` id="1qgz3t"
   proyecto-dos-ciberseguridad
 ├── README.md
 ├── Proyecto_DoS.pdf
 ├── assets/
 │    ├── topologia.png
 │    ├── htop_baseline.png
 │    ├── htop_ataque.png
 │    ├── htop_mitigacion.png
 │    ├── web.png
 │    └── comparativa.png
 └── web/
      ├── index.html
      ├── style.css
      ├── app.js
      └── clientes.json
```

 Objetivo:

Analizar el impacto de ataques DoS sobre un servidor web y aplicar medidas de mitigación para mantener la disponibilidad del servicio.

Medidas de mitigación
Nivel aplicación (Apache)
mod_reqtimeout
Control de timeouts
Optimización de conexiones
Nivel red (kernel + firewall)
SYN cookies
Ajustes sysctl
Reglas iptables

Monitorización del sistema
  Estado normal (baseline)
Bajo consumo de CPU
Pocas conexiones activas
Sistema estable
![HTOP normal](htop_baseline.png)

  Bajo ataque
Incremento de conexiones
Saturación del servicio
Degradación de disponibilidad
![HTOP durante ataque](htop_ataque.png)

  Con mitigaciones aplicadas
Reducción de conexiones maliciosas
Sistema estable
Servicio operativo
![HTOP con mitigación](htop_mitigacion.png)

  Comparativa de resultados
![Gráfico comparativo](comparativa.png)
  
Conclusiones clave:
Slowloris → satura conexiones HTTP
SYN Flood → satura la pila TCP
Las mitigaciones reducen significativamente el impacto

Autor

Alex Guidus

⚠️ Nota

Proyecto realizado en entorno controlado con fines educativos.
