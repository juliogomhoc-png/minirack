// Catálogo del comparador. Para añadir un producto, copia un bloque y cambia los datos.
// TAG: tu ID de Amazon Afiliados (lo da Amazon al darte de alta, termina en -21).
// link: déjalo vacío para usar un enlace de búsqueda; cuando tengas cuenta, pega el
//       enlace corto de SiteStripe (amzn.to/...) o https://www.amazon.es/dp/ASIN.
// No pongas precios: Amazon solo permite mostrarlos si se actualizan por su API.
// revisar: true = specs sacadas de memoria; compruébalas en la web del fabricante antes de publicar.
window.TAG = 'minirack-21';

window.PRODUCTOS = [
  // ---------- MINI PC ----------
  { id:'eq14', cat:'Mini PC', nombre:'Beelink EQ14', buscar:'Beelink EQ14 N150',
    cpu:'Intel N150', nucleos:'4C/4T', ram:'16 GB DDR4', ramMax:16, discos:'2× M.2 NVMe', bahias:0, m2:2,
    lan:'2× 2,5 GbE', lanMax:2.5, nLan:2, quicksync:true, x86:true, consumo:'bajo',
    usos:['docker','ha','firewall','plex'], nota:'Dos puertos de 2,5 GbE y fuente interna: vale para servidor Docker o router OPNsense pequeño.', revisar:true },
  { id:'s12pro', cat:'Mini PC', nombre:'Beelink Mini S12 Pro', buscar:'Beelink Mini S12 Pro N100',
    cpu:'Intel N100', nucleos:'4C/4T', ram:'16 GB DDR4', ramMax:16, discos:'1× M.2 + 1× SATA 2,5"', bahias:1, m2:1,
    lan:'1× 1 GbE', lanMax:1, nLan:1, quicksync:true, x86:true, consumo:'bajo',
    usos:['docker','ha','plex'], nota:'El clásico para empezar: Home Assistant, Pi-hole y unos cuantos contenedores.', revisar:true },
  { id:'g3plus', cat:'Mini PC', nombre:'GMKtec NucBox G3 Plus', buscar:'GMKtec NucBox G3 Plus N150',
    cpu:'Intel N150', nucleos:'4C/4T', ram:'16 GB DDR4', ramMax:16, discos:'1× M.2 NVMe', bahias:0, m2:1,
    lan:'1× 2,5 GbE', lanMax:2.5, nLan:1, quicksync:true, x86:true, consumo:'bajo',
    usos:['docker','ha','plex'], nota:'Barato y con 2,5 GbE. Solo cabe un disco.', revisar:true },
  { id:'m920q', cat:'Mini PC', nombre:'Lenovo ThinkCentre M920q (reacondicionado)', buscar:'Lenovo ThinkCentre M920q reacondicionado i5-8500T',
    cpu:'Intel Core i5-8500T', nucleos:'6C/6T', ram:'8–16 GB DDR4', ramMax:64, discos:'1× M.2 NVMe + 1× SATA 2,5"', bahias:1, m2:1,
    lan:'1× 1 GbE (Intel)', lanMax:1, nLan:1, quicksync:true, x86:true, consumo:'medio',
    usos:['proxmox','docker','ha','plex'], nota:'El favorito de r/homelab para Proxmox: hasta 64 GB de RAM y NIC Intel. Admite tarjeta PCIe con riser.', revisar:true },
  { id:'ms01', cat:'Mini PC', nombre:'Minisforum MS-01', buscar:'Minisforum MS-01',
    cpu:'Intel Core i9-12900H / 13900H', nucleos:'14C/20T', ram:'Barebone o hasta 96 GB DDR5', ramMax:96, discos:'3× M.2 NVMe', bahias:0, m2:3,
    lan:'2× 10G SFP+ y 2× 2,5 GbE', lanMax:10, nLan:4, quicksync:true, x86:true, consumo:'alto',
    usos:['proxmox','docker','ha','plex','firewall'], nota:'Para un clúster serio: 10 GbE, 96 GB y ranura PCIe. Caro y se calienta.', revisar:true },
  // ---------- FIREWALL ----------
  { id:'n100fw', cat:'Firewall', nombre:'Mini PC firewall N100 con 4× 2,5 GbE (CWWK/Topton)', buscar:'mini pc firewall N100 4x 2.5G i226',
    cpu:'Intel N100', nucleos:'4C/4T', ram:'Barebone (1× DDR5)', ramMax:16, discos:'1× M.2 NVMe', bahias:0, m2:1,
    lan:'4× 2,5 GbE (Intel i226-V)', lanMax:2.5, nLan:4, quicksync:true, x86:true, consumo:'bajo',
    usos:['firewall','docker'], nota:'Hecho para OPNsense o pfSense: cuatro puertos Intel y sin ventilador. Hay muchas marcas casi iguales.', revisar:true },
  // ---------- NAS ----------
  { id:'ds224', cat:'NAS', nombre:'Synology DS224+', buscar:'Synology DS224+',
    cpu:'Intel Celeron J4125', nucleos:'4C/4T', ram:'2 GB DDR4', ramMax:6, discos:'2 bahías', bahias:2, m2:0,
    lan:'2× 1 GbE', lanMax:1, nLan:2, quicksync:true, x86:true, consumo:'bajo',
    usos:['nas','plex','docker'], nota:'El sistema más pulido (DSM) y el más fácil. Por hardware, se queda corto para su precio.', revisar:true },
  { id:'ds423', cat:'NAS', nombre:'Synology DS423+', buscar:'Synology DS423+',
    cpu:'Intel Celeron J4125', nucleos:'4C/4T', ram:'2 GB DDR4', ramMax:6, discos:'4 bahías + 2× M.2', bahias:4, m2:2,
    lan:'2× 1 GbE', lanMax:1, nLan:2, quicksync:true, x86:true, consumo:'medio',
    usos:['nas','plex','docker'], nota:'Cuatro bahías con DSM; los M.2 sirven de caché.', revisar:true },
  { id:'dxp2800', cat:'NAS', nombre:'UGREEN NASync DXP2800', buscar:'UGREEN NASync DXP2800',
    cpu:'Intel N100', nucleos:'4C/4T', ram:'8 GB DDR5', ramMax:16, discos:'2 bahías + 2× M.2', bahias:2, m2:2,
    lan:'1× 2,5 GbE', lanMax:2.5, nLan:1, quicksync:true, x86:true, consumo:'bajo',
    usos:['nas','plex','docker','ha'], nota:'Mejor hardware que Synology por menos dinero. Admite instalar TrueNAS o Unraid.', revisar:true },
  { id:'dxp4800p', cat:'NAS', nombre:'UGREEN NASync DXP4800 Plus', buscar:'UGREEN NASync DXP4800 Plus',
    cpu:'Intel Pentium Gold 8505', nucleos:'5C/6T', ram:'8 GB DDR5', ramMax:64, discos:'4 bahías + 2× M.2', bahias:4, m2:2,
    lan:'1× 10 GbE + 1× 2,5 GbE', lanMax:10, nLan:2, quicksync:true, x86:true, consumo:'medio',
    usos:['nas','plex','docker','ha','proxmox'], nota:'10 GbE y hasta 64 GB: sirve de NAS y de servidor de máquinas virtuales a la vez.', revisar:true },
  { id:'f4424', cat:'NAS', nombre:'TerraMaster F4-424', buscar:'TerraMaster F4-424',
    cpu:'Intel N95', nucleos:'4C/4T', ram:'8 GB DDR5', ramMax:32, discos:'4 bahías + 2× M.2', bahias:4, m2:2,
    lan:'2× 2,5 GbE', lanMax:2.5, nLan:2, quicksync:true, x86:true, consumo:'bajo',
    usos:['nas','plex','docker'], nota:'Cuatro bahías y 2,5 GbE a buen precio. Su sistema (TOS) está menos pulido.', revisar:true },
  { id:'ts233', cat:'NAS', nombre:'QNAP TS-233', buscar:'QNAP TS-233',
    cpu:'ARM Cortex-A55', nucleos:'4C/4T', ram:'2 GB', ramMax:2, discos:'2 bahías', bahias:2, m2:0,
    lan:'1× 1 GbE', lanMax:1, nLan:1, quicksync:false, x86:false, consumo:'muy bajo',
    usos:['nas'], nota:'Solo para copias de seguridad y archivos. No transcodifica bien ni mueve máquinas virtuales.', revisar:true },
  // ---------- PLACAS ----------
  { id:'rpi5', cat:'Placa', nombre:'Raspberry Pi 5 (8 GB)', buscar:'Raspberry Pi 5 8GB',
    cpu:'Broadcom BCM2712 (Cortex-A76)', nucleos:'4C/4T', ram:'8 GB LPDDR4X', ramMax:8, discos:'microSD o NVMe con HAT', bahias:0, m2:0,
    lan:'1× 1 GbE', lanMax:1, nLan:1, quicksync:false, x86:false, consumo:'muy bajo',
    usos:['ha','docker'], nota:'Ideal para Home Assistant o Pi-hole. Con caja, fuente y NVMe sale casi al precio de un mini PC N100.', revisar:true }
];

window.USOS = {
  proxmox:'Máquinas virtuales (Proxmox)', docker:'Contenedores Docker', ha:'Home Assistant',
  nas:'Guardar archivos y copias (NAS)', plex:'Plex/Jellyfin con transcodificación', firewall:'Router/firewall (OPNsense)'
};
