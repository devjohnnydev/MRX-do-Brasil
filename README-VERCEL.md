# Deploy no Vercel - MRX DO BRASIL

## Passos para Deploy

### 1. Preparação do Projeto
O projeto agora está configurado para deploy no Vercel com:
- ✅ `vercel.json` configurado para build estático
- ✅ Assets otimizados para produção
- ✅ Configuração de paths adaptada

### 2. Deploy no Vercel

1. **Conecte seu repositório** ao Vercel
2. **Configure as variáveis de ambiente** (se necessário)
3. **O Vercel irá automaticamente**:
   - Detectar que é um projeto Vite/React
   - Executar `npm run build`
   - Servir os arquivos estáticos

### 3. Configurações Importantes

- **Build Command**: `npm run build`
- **Output Directory**: `dist/public`
- **Install Command**: `npm install`

### 4. Assets e Imagens
- Todas as imagens em `attached_assets/` serão copiadas automaticamente
- URLs das imagens funcionarão tanto local quanto em produção

### 5. Verificação Pós-Deploy
Após o deploy, verifique:
- ✅ Logo aparece no header e footer
- ✅ Imagens de fundo carregam corretamente
- ✅ Partículas interativas funcionam
- ✅ Formulários de contato funcionam
- ✅ Responsividade em mobile

## Solução de Problemas

### Se as imagens não carregarem:
1. Verifique se as imagens estão na pasta `attached_assets/`
2. Verifique se o build copiou os assets para `dist/public/attached_assets/`

### Se o site mostrar código:
- Isso não deve mais acontecer com a nova configuração
- O Vercel agora serve apenas o frontend compilado

O projeto está pronto para deploy! 🚀