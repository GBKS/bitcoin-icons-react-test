import React from 'react';

import * as Icons from '@bitcoin-design/bitcoin-icons-react/outline'

class OutlineIcons extends React.Component {
  iconStyle() {
    return {
      width: this.props.size+'px',
      height: this.props.size+'px',
      strokeWidth: this.props.strokeWidth+'px'
    }
  }

  render() {
    return (
      <div className="OutlineIcons">
        <Icons.ArrowDownIcon className="icon" style={this.iconStyle()} />
        <Icons.ArrowLeftIcon className="icon" style={this.iconStyle()} />
        <Icons.ArrowRightIcon className="icon" style={this.iconStyle()} />
        <Icons.ArrowUpIcon className="icon" style={this.iconStyle()} />
        <Icons.CaretDownIcon className="icon" style={this.iconStyle()} />
        <Icons.CaretLeftIcon className="icon" style={this.iconStyle()} />
        <Icons.CaretRightIcon className="icon" style={this.iconStyle()} />
        <Icons.CaretUpIcon className="icon" style={this.iconStyle()} />
        <Icons.CheckIcon className="icon" style={this.iconStyle()} />
        <Icons.ConsoleIcon className="icon" style={this.iconStyle()} />
        <Icons.CrossIcon className="icon" style={this.iconStyle()} />
        <Icons.ExitIcon className="icon" style={this.iconStyle()} />
        <Icons.FlipHorizontalIcon className="icon" style={this.iconStyle()} />
        <Icons.FlipVerticalIcon className="icon" style={this.iconStyle()} />
        <Icons.MenuIcon className="icon" style={this.iconStyle()} />
        <Icons.MinusIcon className="icon" style={this.iconStyle()} />
        <Icons.MixedIcon className="icon" style={this.iconStyle()} />
        <Icons.PlusIcon className="icon" style={this.iconStyle()} />
        <Icons.ProxyIcon className="icon" style={this.iconStyle()} />
        <Icons.SendIcon className="icon" style={this.iconStyle()} />
        <Icons.ReceiveIcon className="icon" style={this.iconStyle()} />
        <Icons.SearchIcon className="icon" style={this.iconStyle()} />
        <Icons.TransferIcon className="icon" style={this.iconStyle()} />
        <Icons.UnmixedIcon className="icon" style={this.iconStyle()} />

        <Icons.ExportIcon className="icon" style={this.iconStyle()} />
        <Icons.BitcoinIcon className="icon" style={this.iconStyle()} />
        <Icons.BitcoinCircleIcon className="icon" style={this.iconStyle()} />
        <Icons.BlockIcon className="icon" style={this.iconStyle()} />
        <Icons.CarIcon className="icon" style={this.iconStyle()} />
        <Icons.CartIcon className="icon" style={this.iconStyle()} />
        <Icons.ClearCharacterIcon className="icon" style={this.iconStyle()} />
        <Icons.ClockIcon className="icon" style={this.iconStyle()} />
        <Icons.CloudIcon className="icon" style={this.iconStyle()} />
        <Icons.ContactsIcon className="icon" style={this.iconStyle()} />
        <Icons.CopyIcon className="icon" style={this.iconStyle()} />
        <Icons.DevicesIcon className="icon" style={this.iconStyle()} />
        <Icons.EditIcon className="icon" style={this.iconStyle()} />
        <Icons.EllipsisIcon className="icon" style={this.iconStyle()} />
        <Icons.ExchangeIcon className="icon" style={this.iconStyle()} />
        <Icons.FileIcon className="icon" style={this.iconStyle()} />
        <Icons.GearIcon className="icon" style={this.iconStyle()} />
        <Icons.GridIcon className="icon" style={this.iconStyle()} />
        <Icons.HiddenIcon className="icon" style={this.iconStyle()} />
        <Icons.HomeIcon className="icon" style={this.iconStyle()} />
        <Icons.AlertIcon className="icon" style={this.iconStyle()} />
        <Icons.InfoIcon className="icon" style={this.iconStyle()} />
        <Icons.QuestionIcon className="icon" style={this.iconStyle()} />
        <Icons.KeyIcon className="icon" style={this.iconStyle()} />
        <Icons.LightningIcon className="icon" style={this.iconStyle()} />
        <Icons.LinkIcon className="icon" style={this.iconStyle()} />
        <Icons.LockIcon className="icon" style={this.iconStyle()} />
        <Icons.UnlockIcon className="icon" style={this.iconStyle()} />
        <Icons.MagicWandIcon className="icon" style={this.iconStyle()} />
        <Icons.MilkIcon className="icon" style={this.iconStyle()} />
        <Icons.MinerIcon className="icon" style={this.iconStyle()} />
        <Icons.MiningIcon className="icon" style={this.iconStyle()} />
        <Icons.MnemonicIcon className="icon" style={this.iconStyle()} />
        <Icons.NodeIcon className="icon" style={this.iconStyle()} />
        <Icons.Node0ConnectionsIcon className="icon" style={this.iconStyle()} />
        <Icons.Node1ConnectionIcon className="icon" style={this.iconStyle()} />
        <Icons.Node2ConnectionsIcon className="icon" style={this.iconStyle()} />
        <Icons.Node3ConnectionsIcon className="icon" style={this.iconStyle()} />
        <Icons.NodeHardwareIcon className="icon" style={this.iconStyle()} />
        <Icons.NoDollarsIcon className="icon" style={this.iconStyle()} />
        <Icons.PasswordIcon className="icon" style={this.iconStyle()} />
        <Icons.QrCodeIcon className="icon" style={this.iconStyle()} />
        <Icons.SafeIcon className="icon" style={this.iconStyle()} />
        <Icons.SatoshiV1Icon className="icon" style={this.iconStyle()} />
        <Icons.SatoshiV2Icon className="icon" style={this.iconStyle()} />
        <Icons.ScanIcon className="icon" style={this.iconStyle()} />
        <Icons.SdCardIcon className="icon" style={this.iconStyle()} />
        <Icons.SharedWalletIcon className="icon" style={this.iconStyle()} />
        <Icons.ShareIcon className="icon" style={this.iconStyle()} />
        <Icons.SnowflakeIcon className="icon" style={this.iconStyle()} />
        <Icons.SofaIcon className="icon" style={this.iconStyle()} />
        <Icons.TrashIcon className="icon" style={this.iconStyle()} />
        <Icons.TwoKeysIcon className="icon" style={this.iconStyle()} />
        <Icons.UsbIcon className="icon" style={this.iconStyle()} />
        <Icons.VisibleIcon className="icon" style={this.iconStyle()} />
        <Icons.WalletIcon className="icon" style={this.iconStyle()} />
      </div>
    )
  }
}

export default OutlineIcons;
