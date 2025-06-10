import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';

// Configuración global para los tests
configure({ testIdAttribute: 'data-testid' });
