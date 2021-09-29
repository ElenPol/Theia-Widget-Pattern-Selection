import { ContainerModule } from 'inversify';
import { extensionWidget } from './extension-widget';
import { extensionContribution } from './extension-contribution';
import { bindViewContribution, FrontendApplicationContribution, WidgetFactory } from '@theia/core/lib/browser';

import '../../src/browser/style/index.css';

export default new ContainerModule(bind => {
    bindViewContribution(bind, extensionContribution);
    bind(FrontendApplicationContribution).toService(extensionContribution);
    bind(extensionWidget).toSelf();
    bind(WidgetFactory).toDynamicValue(ctx => ({
        id: extensionWidget.ID,
        createWidget: () => ctx.container.get<extensionWidget>(extensionWidget)
    })).inSingletonScope();
});