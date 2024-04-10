import { Injectable } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  redirectBasedOnDevice(req: Request, res: Response): void {
    const userAgent = req.get('User-Agent')
    if (/android/i.test(userAgent)) {
      res.redirect("https://play.google.com/store/apps/details?id=finance.global.travel.niyo")
    }
    if (/iPad|iPhone|iPod/.test(userAgent)) {
      res.redirect("https://apps.apple.com/us/app/niyo-global-cards-for-travel/id1633946487?action=write-review")
    }
    else{
      res.redirect("https://play.google.com/store/apps/details?id=finance.global.travel.niyo")
    }
  }
}
