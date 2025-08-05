#!/bin/bash

# Script para compilar el tema Carpentry Block Theme
# Uso: ./build.sh

echo "🔨 Compilando Carpentry Block Theme..."

# Cambiar al directorio del tema
cd "$(dirname "$0")"

# Limpiar build anterior
echo "🧹 Limpiando directorio build..."
npm run clean

# Compilar bloques con webpack
echo "📦 Compilando bloques..."
npm run build

# Compilar estilos SASS
echo "🎨 Compilando estilos SASS..."
npm run build:sass

echo "✅ ¡Compilación completa!"
echo ""
echo "📁 Archivos generados en el directorio 'build/'"
echo "🔄 Recarga tu página de WordPress para ver los cambios"
