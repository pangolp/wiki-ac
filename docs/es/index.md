---
prev: false
next: false
aside: false
---

# Inicio

Bienvenido a la wiki del proyecto [AzerothCore](http://www.azerothcore.org/).

## NOTA IMPORTANTE

::: warning
El equipo y los propietarios de AzerothCore NO patrocinan ni apoyan en ningún caso servidores públicos ilegales. Si utiliza estos proyectos para ejecutar un servidor público ilegal y no para probar y aprender, es su elección personal.
:::

## Empezando

- [Guía de instalación](installation)

## Documentación

- [Índice de documentación](documentation-index) - Toda la documentación en un solo lugar
- [Doxygen Docs](https://www.azerothcore.org/doxygen) - API actualizada y documentación del código fuente.

### Estructura de la base de datos

- [Auth](auth/)
- [Characters](database-characters)
- [World](database-world)

## Descripción general

AzerothCore es una solución modular y de código abierto completa para el desarrollo de MMO.

### Base sólida

AzerothCore tiene una base sólida tras años de desarrollo: se basa en MaNGOS, TrinityCore y SunwellCore. Estamos mejorando esta confiabilidad con desarrollo continuo y reglas estrictas para fusionar el código en la rama maestra.

### Estabilidad

Nos aseguramos de que todos los cambios pasen los CI antes de fusionarse con la rama maestra.

<div style="display: block; width: 100%;">
  <a href="https://github.com/azerothcore/azerothcore-wotlk/actions/workflows/core-build-nopch.yml" style="display: inline-block; margin-right: 10px;">
    <img alt="Github CI Core Status" src="https://github.com/azerothcore/azerothcore-wotlk/actions/workflows/core-build-nopch.yml/badge.svg?branch=master">
  </a>

  <a href="https://github.com/azerothcore/azerothcore-wotlk/actions/workflows/windows_build.yml" style="display: inline-block; margin-right: 10px;">
    <img alt="Github CI Windows Status" src="https://github.com/azerothcore/azerothcore-wotlk/actions/workflows/windows_build.yml/badge.svg">
  </a>

  <a href="https://github.com/azerothcore/azerothcore-wotlk/actions/workflows/macos_build.yml" style="display: inline-block; margin-right: 10px;">
    <img alt="Github CI Mac Status" src="https://github.com/azerothcore/azerothcore-wotlk/actions/workflows/macos_build.yml/badge.svg">
  </a>

  <a href="https://github.com/azerothcore/azerothcore-wotlk/actions/workflows/docker_build.yml" style="display: inline-block;">
    <img alt="Github CI Docker Status" src="https://github.com/azerothcore/azerothcore-wotlk/actions/workflows/docker_build.yml/badge.svg">
  </a>
</div>

## Código abierto

Los nuevos componentes fuente de AzerothCore se publican bajo GNU AGPL 3.0. Las fuentes antiguas basadas en MaNGOS/TrinityCore se publican bajo GNU GPL 2.0, ambas licencias son gratuitas y de código abierto.

### Contenido tipo Blizz

Nos esforzamos por hacer que todo el contenido del juego sea como los servidores oficiales build 12340. Por lo tanto, tenemos un alto estándar para las correcciones que se realizan.

### Impulsado por la comunidad

AzerothCore tiene una comunidad activa de desarrolladores, contribuyentes y usuarios que colaboran, comparten conocimientos y brindan soporte a través de foros, canales de Discord y otras plataformas de comunicación. Si quieres contribuir, ¡nos encantaría!

### Personalización

AzerothCore está diseñado para ser altamente modular, lo que permite a los desarrolladores ampliar y personalizar el juego para adaptarlo a sus preferencias o crear experiencias de juego únicas. Esta flexibilidad permite agregar características, contenido y modificaciones personalizadas. [Leer más...](the-modular-structure)
