@echo off
set module=%1
set path=%~dp0%module%
set model=%module%Model
set router=%module%Router
set controller=%module%Controller
set service=%module%Service
set model_path=%module%.model.ts
set router_path=%module%.router.ts
set controller_path=%module%.controller.ts
set service_path=%module%.service.ts

mkdir %path%
echo creating model
(
  echo export default class %model% ^{
  echo.
  echo ^}
)>%path%/%model_path%
echo creating router
(
  echo import ^{ Router ^} from 'express';
  echo import %controller% from './%controller_path%';
  echo.
  echo export const router = Router^(^);
  echo.
  echo router.get^('/', %controller%.action^);
  echo.
)>%path%/%router_path%

echo creating controller
(
  echo import ^{ Request, Response ^} from 'express';
  echo import %service% from './%service_path%';
  echo.
  echo export default class %controller% ^{
  echo   public static async action^(req: Request, res: Response^) ^{
  echo     return res.status^(200^).send^(%service%.method^(^)^);
  echo   ^}
  echo ^}
  echo.
)>%path%/%controller_path%

echo creating service
(
  echo export default class %service% ^{
  echo   public static async method^(^): Promise^<void^> ^{
  echo.
  echo   ^}
  echo ^}
  echo.
)>%path%/%service_path%
