import { BigInt } from "@graphprotocol/graph-ts"
import { L2, Approval, Transfer } from "../generated/L2/L2"
import { Transferx, Approvalx } from "../generated/schema"

export function handleApproval(event: Approval): void {

  let id = event.params.owner
            .toHexString()
            .concat('-')
            .concat(event.logIndex.toString())
  
  let Approvalx = new Approvalx(id)


Approvalx.owner = event.params.owner
Approvalx.spender = event.params.spender
Approvalx.value = event.params.value


Approvalx.save()

  
}


export function handleTransfer(event: Transfer): void {

  let id = event.params.to
            .toHexString()
            .concat('-')
            .concat(event.logIndex.toString())
  
  let Transferx = new Transferx(id)

  
Transferx.from = event.params.from
Transferx.to = event.params.to
Transferx.value = event.params.value


Transferx.save()


}
