import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'statusBadge', standalone: true })
export class StatusBadgePipe implements PipeTransform {
  transform(status: string): string { return status === 'Live' ? '✅ Live' : status === 'In Progress' ? '🚧 In Progress' : '📝 Planned'; }
}
