/**
 * UI主题配置
 */
import { Colors, Typography } from '@/components/ui-lib';

Colors.loadColors({
  error: '#ff2442',
  success: '#00CD8B',
  text: '#20303C',
});

Typography.loadTypographies({
  h1: { fontSize: 54, fontWeight: '500', lineHeight: 76 },
  h2: { fontSize: 46, fontWeight: '500', lineHeight: 66 },
  h3: { fontSize: 38, fontWeight: '500', lineHeight: 56 },
  h4: { fontSize: 32, fontWeight: '500', lineHeight: 48 },
  h5: { fontSize: 26, fontWeight: '500', lineHeight: 40 },
  h6: { fontSize: 20, fontWeight: '500', lineHeight: 36 },
});
